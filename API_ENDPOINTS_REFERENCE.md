# Complete API Endpoints Reference

## Base URL
```
http://localhost:5000/api
```

## Authentication Endpoints

### 1. Register New User
```
POST /api/auth/register
Content-Type: application/json

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "qualification": "B.Tech in Computer Science",
  "phone": "9876543210",
  "city": "Bangalore"
}

Response (201):
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com"
  }
}

Response (409):
{
  "error": "Email already registered"
}
```

### 2. Login User
```
POST /api/auth/login
Content-Type: application/json

Request Body:
{
  "email": "john@example.com",
  "password": "password123"
}

Response (200):
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "qualification": "B.Tech in Computer Science",
    "city": "Bangalore"
  }
}

Response (401):
{
  "error": "Invalid credentials"
}
```

### 3. Logout User _(Requires Authentication)_
```
POST /api/auth/logout
Authorization: Bearer <token>
Content-Type: application/json

Response (200):
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## Job Endpoints

### 4. Get All Jobs (Public)
```
GET /api/jobs

Response (200):
{
  "success": true,
  "jobs": [
    {
      "id": "job-1",
      "title": "Senior Software Engineer",
      "company": "TechCorp",
      "company_description": "Leading tech company",
      "location": "Bangalore",
      "type": "Full-time",
      "salary": "₹20-30 LPA",
      "description": "We are looking for...",
      "requirements": ["5+ years experience", "Strong in Java/Python"],
      "required_qualification": "B.Tech in Computer Science",
      "posted": "2024-03-29T10:00:00Z",
      "status": "active",
      "category": "Engineering",
      "applicants": 5,
      "created_by": "user-id"
    }
  ]
}
```

### 5. Get Job By ID (Public)
```
GET /api/jobs/:id

Example: GET /api/jobs/job-1

Response (200):
{
  "success": true,
  "job": {
    "id": "job-1",
    "title": "Senior Software Engineer",
    "company": "TechCorp",
    ...
  }
}

Response (404):
{
  "error": "Job not found"
}
```

### 6. Create Job _(Requires Authentication)_
```
POST /api/jobs
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "title": "UI Developer",
  "company": "WebSoft",
  "company_description": "Web development company",
  "location": "Mumbai",
  "type": "Full-time",
  "salary": "₹15-22 LPA",
  "description": "Join our team...",
  "requirements": ["React expertise", "HTML/CSS"],
  "requiredQualification": "B.Tech in Computer Science",
  "category": "Development"
}

Response (201):
{
  "success": true,
  "message": "Job created successfully",
  "job": {
    "id": "new-job-id",
    "title": "UI Developer",
    "company": "WebSoft",
    ...
  }
}
```

### 7. Update Job _(Requires Authentication)_
```
PUT /api/jobs/:id
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "title": "Senior UI Developer",
  "status": "active"
}

Response (200):
{
  "success": true,
  "message": "Job updated successfully"
}

Response (403):
{
  "error": "Not authorized to update this job"
}
```

### 8. Delete Job _(Requires Authentication)_
```
DELETE /api/jobs/:id
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Job deleted successfully"
}

Response (403):
{
  "error": "Not authorized to delete this job"
}
```

---

## Application Endpoints _(All Require Authentication)_

### 9. Apply for Job
```
POST /api/applications/apply
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "jobId": "job-1"
}

Response (201):
{
  "success": true,
  "message": "Application submitted successfully",
  "application": {
    "id": "app-1",
    "userId": "user-id",
    "jobId": "job-1",
    "appliedDate": "2024-03-29T10:00:00Z",
    "status": "pending"
  }
}

Response (409):
{
  "error": "Already applied to this job"
}
```

### 10. Get User's Applications
```
GET /api/applications
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "applications": [
    {
      "id": "app-1",
      "user_id": "user-id",
      "job_id": "job-1",
      "applied_date": "2024-03-29T10:00:00Z",
      "status": "pending",
      "title": "Senior Software Engineer",
      "company": "TechCorp",
      "location": "Bangalore",
      "salary": "₹20-30 LPA"
    }
  ]
}
```

### 11. Get Job's Applications _(Recruiter)_
```
GET /api/jobs/:jobId/applications
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "applications": [
    {
      "id": "app-1",
      "user_id": "user-id",
      "applied_date": "2024-03-29T10:00:00Z",
      "status": "pending",
      "name": "John Doe",
      "email": "john@example.com",
      "qualification": "B.Tech in CS",
      "phone": "9876543210",
      "city": "Bangalore"
    }
  ]
}

Response (403):
{
  "error": "Not authorized to view applications"
}
```

### 12. Update Application Status _(Recruiter)_
```
PUT /api/applications/:applicationId/status
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "status": "accepted"  // or "rejected" or "pending"
}

Response (200):
{
  "success": true,
  "message": "Application status updated"
}

Response (400):
{
  "error": "Invalid status"
}
```

---

## User Endpoints _(All Require Authentication)_

### 13. Get User Profile
```
GET /api/users/profile
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "qualification": "B.Tech in Computer Science",
    "phone": "9876543210",
    "city": "Bangalore",
    "registered_at": "2024-03-29T10:00:00Z"
  }
}
```

### 14. Update User Profile
```
PUT /api/users/profile
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "name": "John Doe Updated",
  "qualification": "B.Tech in Computer Science",
  "phone": "9876543210",
  "city": "Mumbai"
}

Response (200):
{
  "success": true,
  "message": "Profile updated successfully"
}
```

---

## Health Check Endpoint

### 15. Server Status
```
GET /health

Response (200):
{
  "status": "Server is running"
}
```

---

## Error Codes

| Code | Meaning | Common Causes |
|------|---------|---------------|
| 200 | OK | Successful GET/PUT request |
| 201 | Created | Successful POST request |
| 400 | Bad Request | Missing required fields |
| 401 | Unauthorized | No token or invalid email/password |
| 403 | Forbidden | Token invalid or not authorized to resource |
| 404 | Not Found | Job/User/Application doesn't exist |
| 409 | Conflict | Email already exists or already applied |
| 500 | Server Error | Database or server error |

---

## Using with Fetch API

### Example: Login and Store Token
```javascript
const response = await fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'password123'
  })
});

const data = await response.json();
if (data.success) {
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data.user));
}
```

### Example: Authenticated Request
```javascript
const token = localStorage.getItem('token');
const response = await fetch('http://localhost:5000/api/jobs', {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
const data = await response.json();
```

---

## Using with Frontend API Service

See [src/lib/api.ts](src/lib/api.ts) for pre-built functions:

```typescript
import { authAPI, jobAPI, applicationAPI, userAPI } from '@/lib/api';

// Register
await authAPI.register({ name, email, password, ... });

// Login
await authAPI.login(email, password);

// Get jobs
await jobAPI.getAllJobs();

// Apply for job
await applicationAPI.applyJob(jobId);

// Update profile
await userAPI.updateProfile({ name, city, ... });
```

---

## CORS Configuration

Frontend URL: `http://localhost:5173`

Backend allows requests from this URL. To change:
Edit `server.js`:
```javascript
app.use(cors({
  origin: 'http://localhost:5173', // Change this URL
  credentials: true
}));
```

---

## Testing with cURL

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "pass123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "pass123"
  }'
```

### Get All Jobs
```bash
curl http://localhost:5000/api/jobs
```

### Apply for Job (with token)
```bash
curl -X POST http://localhost:5000/api/applications/apply \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"jobId": "job-1"}'
```

---

## Rate Limiting
Currently not implemented. Can be added using `express-rate-limit` package.

## Pagination
Currently not implemented. All jobs returned in single response.

## Future Improvements
- [ ] Implement pagination for jobs list
- [ ] Add rate limiting
- [ ] Add refresh token mechanism
- [ ] Add search/filter at API level
- [ ] Add file upload for resumes
- [ ] Add email notifications
