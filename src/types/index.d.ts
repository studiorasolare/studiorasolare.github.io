import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
    badge?: number;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

interface MenuItem {
    id: number;
    article_id: number;
    title: string;
    description: string;
}

interface City {
    id: number;
    city: string;
    img_dark: string;
    img_light: string;
    timezone: string;
    class_card: string;
    class_id: string;
}

interface Layouts {
    [key: string]: { columns: number };
}
interface ContactItem {
    label: string;
    value: string;
}

interface BaseChild {
    device?: "desktop" | "mobile" | "both";
}
interface ContactsChild {
    type: "contacts";
    items: ContactItem[];
    device?: "desktop" | "mobile" | "both";
}

// interface ContentChild {
//     type: "h3" | "p" | "ul";
//     content?: string;      // per h3 e p
//     items?: string[];
//     label?: string[];   // per ul
// }

interface ContentElement {
    layout: string;
    column?: number | null;
    type: "image" | "contentBlock";
    src?: string;
    children?: ContentChild[];
    device: "desktop" | "mobile" | "both";
}

export interface Article {
    id: number;
    title?: string;
    slug?: string;
    content: ContentElement[];
}

interface Message {
    id: number;
    name: string;
    email: string;
    message: string;
    read: boolean;
    created_at: string;
}

export interface HomeProps extends PageProps {
    menu: MenuItem[];
    cities: City[];
    articles: Article[];
    layouts: Layouts;
}
interface RecognitionChild {
    type: "recognition";
    items: ContactItem[];
}
export interface ProjectSideProps {
    article: Article;
    layouts: {
        [key: string]: { columns: number };
    };
    isInProject: boolean;
    onExitProject: () => void;

}

export type ContentChild =
    | (BaseChild & { type: "h3"; content: string })
    | (BaseChild & { type: "p"; content?: string })
    | (BaseChild & { type: "ul"; items?: string[] })
    | (BaseChild & { type: "p-multiline"; items?: string[] })
    | (BaseChild & { type: "logos"; items?: string[] })
    | (BaseChild & RecognitionChild)
    | (BaseChild & ContactsChild);
