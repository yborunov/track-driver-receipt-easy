import phoneMockup from "@/assets/iphone-logbook-mockup-transp.png";

const MockupSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Snap a receipt → logbook table
            </h3>
            <p className="text-muted-foreground mb-6">
              Quick capture on the road. See entries like:
            </p>
            <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
              <div className="flex justify-between text-sm text-muted-foreground pb-2 border-b border-border/50">
                <span>Category</span>
                <span>Amount</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-medium text-foreground">Fuel</span>
                <span className="text-foreground">$537.25</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-medium text-foreground">Meals</span>
                <span className="text-foreground">$18.50</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
              <img
                src={phoneMockup}
                alt="Phone mockup with receipt to table"
                className="relative w-80 md:w-96 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupSection;


