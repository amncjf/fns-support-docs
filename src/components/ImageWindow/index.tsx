/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * This component is based on Facebook's "BrowserWindow" component
 * and modified for use with images where a BrowserWindow might not be suitable.
 * - cthulu.fil
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Image from '@theme/IdealImage';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  minHeight: number;
  title: string;
  img: string;
}

export default function ImageWindow({
  children,
  minHeight,
  title = 'image',
  img,
}: Props): JSX.Element {
  return (
    <div className={styles.imageWindow} style={{minHeight}}>
      <div className={styles.imageWindowHeader}>
        <div className={clsx(styles.imageWindowAddressBar, 'text--truncate')}>
          {title}
        </div>
      </div>

      <div className={styles.imageWindowBody}>
        <p align="center">
          {img ? ( <Image img={img} /> ) : <div>{children}</div>}
        </p>
      </div>
    </div>
  );
}
