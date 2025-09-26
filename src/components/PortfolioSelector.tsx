import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

interface PortfolioSelectorProps {
    onValueChange: (value: string) => void;
}

const PortfolioSelector = ({ onValueChange }: PortfolioSelectorProps) => {
    
  return (
<Select onValueChange={onValueChange}>
  <SelectTrigger className="w-[185px] portfolio-selector-value">
    <SelectValue placeholder="Choose a Category" />
  </SelectTrigger>
  <SelectContent className="portfolio-selector-content">
        <SelectGroup>
          <SelectLabel className="portfolio-selector-label">Portfolios</SelectLabel>
          <SelectItem value="about">About</SelectItem>
          <SelectItem value="software-engineering">Software Engineering</SelectItem>
          <SelectItem value="game-development">Game Development</SelectItem>
          <SelectItem value="photography">Photography</SelectItem>
        </SelectGroup>
  </SelectContent>
</Select>
    );
};

export default PortfolioSelector;
