const stats = [
  { value: "500+", label: "Live Jobs" },
  { value: "200+", label: "Companies" },
  { value: "10k+", label: "Placed Freshers" },
  { value: "85%", label: "Match Accuracy" },
];

const StatsSection = () => {
  return (
    <section className="bg-muted/50 py-12">
      <div className="container mx-auto grid grid-cols-2 gap-4 px-4 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border bg-card px-6 py-8 text-center animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <p className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
