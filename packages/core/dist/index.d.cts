import * as react from 'react';
import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, HTMLAttributes } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "primary" | "ghost" | "outline" | "danger" | "danger-outline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}
declare function Button({ variant, className, children, ...props }: ButtonProps): react.JSX.Element;

declare const inputVariants: (props?: ({
    variant?: "ghost" | "outline" | "default" | "filled" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}
declare function Input({ variant, className, startAdornment, endAdornment, ...props }: InputProps): react.JSX.Element;

interface TabType {
    key: string;
    label: string;
    count?: number;
}
interface TabGroupProps {
    tabs: TabType[];
    activeTab: string;
    setActiveTab: (key: string) => void;
}
declare function TabGroup({ tabs, activeTab, setActiveTab }: TabGroupProps): react.JSX.Element;

interface DialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    showCloseButton?: boolean;
    width?: number | string;
    height?: number | string;
    closeOnOutsideClick?: boolean;
    closeOnEsc?: boolean;
}
declare function Dialog({ open, onOpenChange, title, description, children, footer, width, height, showCloseButton, closeOnOutsideClick, closeOnEsc, }: DialogProps): react.JSX.Element;

declare const cardVariants: (props?: ({
    variant?: "default" | "outlined" | "elevated" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>): react.JSX.Element;
declare function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>): react.JSX.Element;
declare function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>): react.JSX.Element;

declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>> & {
    Header: typeof CardHeader;
    Content: typeof CardContent;
    Footer: typeof CardFooter;
};

declare function cn(...inputs: ClassValue[]): string;

export { Button, type ButtonProps, Card, Dialog, type DialogProps, Input, type InputProps, TabGroup, type TabGroupProps, type TabType, cn, inputVariants };
