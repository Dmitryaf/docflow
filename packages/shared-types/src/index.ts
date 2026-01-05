export interface Document {
    id: string;
    title: string;
    status: 'draft' | 'published' | 'archived';
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: string;
    name: string;
    email: string;
    departmentId: string;
}

export interface WidgetConfig {
    id: string;
    type: string;
    settings: Record<string, any>;
}