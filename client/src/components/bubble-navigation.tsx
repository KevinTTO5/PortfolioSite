import { useBubbleNavigation } from "@/hooks/use-bubble-navigation";

const menuItems = [
  { href: "#hero", icon: "fas fa-home", label: "Home", section: "hero" },
  { href: "#about", icon: "fas fa-user", label: "About", section: "about" },
  { href: "#projects", icon: "fas fa-code", label: "Projects", section: "projects" },
  { href: "#contact", icon: "fas fa-envelope", label: "Contact", section: "contact" }
];

export default function BubbleNavigation() {
  const { isExpanded, hasScrolled, toggleBubbleMenu, handleMenuItemClick } = useBubbleNavigation();

  const getBubbleIconClass = () => {
    if (isExpanded) return "fas fa-times text-primary text-xl";
    return hasScrolled ? "fas fa-bars text-primary text-xl" : "fas fa-bars text-primary-foreground text-xl";
  };

  const getBubbleButtonClass = () => {
    let baseClass = "bubble-btn";
    if (hasScrolled && !isExpanded) baseClass += " scrolled";
    return baseClass;
  };

  return (
    <div 
      id="bubbleMenu" 
      className={`bubble-menu ${isExpanded ? 'expanded' : ''}`}
    >
      <button 
        id="bubbleBtn"
        className={getBubbleButtonClass()}
        onClick={toggleBubbleMenu}
        aria-label="Toggle navigation menu"
        data-testid="button-bubble-menu"
        style={{
          animation: isExpanded 
            ? 'bubbleExpand 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
            : 'bubbleContract 0.3s ease-in-out'
        }}
      >
        <i className={getBubbleIconClass()}></i>
      </button>
      
      <nav className="menu-items mt-4">
        {menuItems.map((item) => (
          <a
            key={item.section}
            href={item.href}
            className="menu-item"
            data-section={item.section}
            data-testid={`link-${item.section}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick(item.href);
            }}
          >
            <i className={`${item.icon} mr-2`}></i>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
