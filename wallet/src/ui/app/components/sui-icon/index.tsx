// Copyright (c) 2022, Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import cl from 'classnames';
import { memo, useMemo } from 'react';

import { SuiIcons } from '_assets/fonts/icons/sui-icons';

import type { MouseEventHandler } from 'react';
export { SuiIcons } from '_assets/fonts/icons/sui-icons';

export type SuiIconProps = {
    className?: string;
    icon: SuiIcons | string;
    onClick?: MouseEventHandler<HTMLElement>;
    title?: string;
};

const isSuiIconMap: Record<string, boolean> = Object.values(SuiIcons).reduce<
    Record<string, boolean>
>((acc, anIcon) => {
    acc[anIcon] = true;
    return acc;
}, {});

function BsIcon({ className, icon, onClick, title }: SuiIconProps) {
    console.log(SuiIcons, icon);
    const isSuiIcon = useMemo(() => isSuiIconMap[icon] || false, [icon]);
    return (
        <i
            className={cl(className, {
                [`bi-${icon}`]: !isSuiIcon,
                bi: !isSuiIcon,
                [icon]: isSuiIcon,
            })}
            onClick={onClick}
            title={title}
        ></i>
    );
}

export default memo(BsIcon);
