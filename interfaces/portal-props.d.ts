import IExtendClassProps from './extend-class-props';
import { CSSProperties } from 'react';

export default interface IPortalProps extends IExtendClassProps {
  portalClassName?: string;
  portalStyle?: Partial<CSSStyleDeclaration>;
}
