import { FC, SVGProps } from 'react';
import Plus from '../../assets/icons/plus.svg?react';
import Minus from '../../assets/icons/minus.svg?react';
import Human from '../../assets/icons/human.svg?react';
import ArrowUp from '../../assets/icons/arrow_up.svg?react';


export enum IconsName {
    PLUS = 'plus',
    MINUS = 'minus',
    HUMAN = 'human',
    ARROW_UP = 'arrow_up',
}

interface IconProps extends SVGProps<SVGSVGElement> {
    iconName: IconsName;
    className?: string;
}
const Icons: Record<IconsName, FC<SVGProps<SVGElement>>> = {
    [IconsName.PLUS]: Plus,
    [IconsName.MINUS]: Minus,
    [IconsName.HUMAN]: Human,
    [IconsName.ARROW_UP]: ArrowUp,
};
const Icon = ({ iconName, className, ...otherProps }: IconProps) => {
    const Icon = Icons[iconName];
    return <Icon className={className} {...otherProps} />;
};

export default Icon;
