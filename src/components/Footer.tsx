import { Receipt } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
              <Receipt className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">DriverHero</span>
          </div>
          
          <p className="text-muted-foreground mb-4">
            The simple receipt tracker for truck and delivery drivers.
          </p>
          
          <div className="text-sm text-muted-foreground">
            © 2024 DriverHero. Made with ❤️ for drivers.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;