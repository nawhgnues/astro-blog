import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface AccordionComponentProp {
  title: string;
  description: string;
}

export const AccordionComponent = ({
  title,
  description,
}: AccordionComponentProp) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
