/*!
 * Copyright (c) 2017-2019 Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export interface IMessageFromBackground {
  active: boolean;
  scripts: string[];
  styles: string;
  extended: string[];
}

export type Lifecycle = 'start' | 'dom-update';

export interface IBackgroundCallback {
  classes: string[];
  hrefs: string[];
  ids: string[];
  lifecycle: Lifecycle;
}
