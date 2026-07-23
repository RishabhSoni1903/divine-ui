import { CardContent, CardFooter, CardHeader, CardRoot } from "./Card";

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});