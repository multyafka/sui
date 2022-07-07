// Copyright (c) 2022, Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import classnames from 'classnames/bind';

import SuiIcon, { SuiIcons } from '../sui-icon';

import st from './Logo.module.scss';

const cl = classnames.bind(st);

type LogoProps = {
    size?: 'normal' | 'big' | 'bigger' | 'huge';
    className?: string;
};

const Logo = ({ size = 'normal', className }: LogoProps) => {
    return (
        <div className={cl('container', className)}>
            <SuiIcon className={cl(size, 'icon')} icon={SuiIcons.SuiLogo} />
        </div>
    );
};

export default Logo;
