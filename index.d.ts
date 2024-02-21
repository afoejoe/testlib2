import React, { ChangeEventHandler, MouseEventHandler, ReactElement, ComponentType, MouseEvent as MouseEvent$1 } from 'react';
import * as CSS from 'csstype';
import PropTypes from 'prop-types';

interface IExtra {
  extra?: object;
}

interface ISpread {
  [other: string]: any;
}

interface IExtendClassProps {
  className?: string;
  style?: CSS.Properties;
}

type CSSObject = {
    [className: string]: string;
};

interface ISwitchBaseProps extends IExtra, ISpread, IExtendClassProps {
    styles: CSSObject;
    inputType: string;
    customClasses: string;
    disabled?: boolean;
    name?: number | string;
    checked?: boolean;
    defaultChecked?: boolean;
    value?: string;
    indeterminate?: boolean;
    getIcon?: (checked?: boolean, indeterminate?: boolean) => void;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClick?: MouseEventHandler<HTMLLabelElement>;
}
declare const SwitchBase: React.FC<ISwitchBaseProps>;

interface IBaseTabsProps extends IExtra {
  activeProp?: string;
  activeTabIndex?: number;
  titlesClassName?: string | string[];
  contentClassName?: string | string[];
  data?: any[];
  tabComponent?: ReactElement;
  tabComponentWrapper?: ReactElement;
  tabProps?: object | object[];
  titleField?: string;
  contentField?: string;
  isWrapContent?: boolean;
  onTabClick?(index: number): void;
}

declare const BaseTabs: ComponentType<IBaseTabsProps>;

declare const _default$1: PropTypes.Requireable<string>;

type BorderParamsPositionType = {
    top: number;
    left: number;
};
interface ICheckBordersParams {
    position?: BorderParamsPositionType;
    sizes: {
        height: number;
        width: number;
    };
    padding: number;
    offset?: {
        x: number;
        y: number;
    };
}
type PositionType = {
    top: number;
    left: number;
};
interface ICheckPositionPriorityParams {
    position: PositionType;
    sizes: {
        width: number;
        height: number;
    };
    padding: any;
}
declare const checkBordersUtils: {
    ANCHORS: {
        CENTER: string;
        TOP: string;
        BOTTOM: string;
        LEFT: string;
        RIGHT: string;
    };
    checkVertical: (originValue: number, height: number, vertical: string, isModal: boolean) => number;
    checkHorizontal: (originValue: number, width: number, horizontal: string, isModal: boolean) => number;
    checkBorders: (params: ICheckBordersParams) => BorderParamsPositionType;
    checkPositionPriority: (params: ICheckPositionPriorityParams) => {
        right: boolean;
        top: boolean;
        left: boolean;
        bottom: boolean;
    };
};

type Callback$1 = (event: MouseEvent$1) => void;
declare class ClickDetector {
    clickedElement: Node | null;
    composedPath: Node[];
    clickCallbackCollection: Set<Callback$1>;
    constructor();
    removeClickListener: () => void;
    clickListener: (event: MouseEvent) => void;
    getLastClickedElement: () => Node | null;
    isElemContainClick: (domElement: Node | null) => boolean;
    isClickContainElem: (domElement: Node | null) => boolean | null;
    addClickCallback: (callback: Callback$1) => void;
    removeClickCallback: (callback: Callback$1) => void;
}
declare const clickDetectorInstance: ClickDetector;

declare const escapeModalClose: (component: ComponentType<any>) => ComponentType<any>;

interface IZIndexService {
    componentStore: Map<any, number>;
    addToComponentStore(component: any): number;
    removeToComponentStore(component: any): void;
    getMaxIndex(): number;
}
declare class ZIndexService implements IZIndexService {
    componentStore: Map<any, any>;
    addToComponentStore: (component: HTMLElement) => any;
    removeToComponentStore: (component: HTMLElement) => void;
    getMaxIndex: () => any;
}
declare const _default: ZIndexService;

type Callback = (...args: any[]) => unknown;
declare const useEvent: <T extends Callback = Callback>(callback: T) => T;

export { BaseTabs, IBaseTabsProps, ISwitchBaseProps, _default$1 as LMS, SwitchBase, checkBordersUtils, clickDetectorInstance as clickDetector, escapeModalClose, useEvent, _default as zIndexService };
