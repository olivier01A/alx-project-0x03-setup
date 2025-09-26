// interface/index.ts
export interface HomeProps {
  title: string;
  description: string;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}
