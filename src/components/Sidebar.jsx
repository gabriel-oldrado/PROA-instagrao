import { Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, Menu } from "lucide-react";
import { currentUser } from "../data/posts";

const navItems = [
  { icon: Home, label: "Início" },
  { icon: Search, label: "Pesquisar" },
  { icon: Compass, label: "Explorar" },
  { icon: Film, label: "Reels" },
  { icon: MessageCircle, label: "Mensagens" },
  { icon: Heart, label: "Notificações" },
  { icon: PlusSquare, label: "Criar" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/logo.png" alt="Instagram" className="logo-img" />
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ icon: Icon, label }) => (
          <button key={label} className="nav-item">
            <Icon size={24} strokeWidth={1.5} />
            <span>{label}</span>
          </button>
        ))}

        <button className="nav-item nav-profile">
          <img src={currentUser.avatar} alt={currentUser.username} className="nav-avatar" />
          <span>Perfil</span>
        </button>
      </nav>

      <button className="nav-item nav-more">
        <Menu size={24} strokeWidth={1.5} />
        <span>Mais</span>
      </button>
    </aside>
  );
}