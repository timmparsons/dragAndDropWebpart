import * as React from 'react';
import styles from './DragAndDrop.module.scss';
import { IDragAndDropProps } from './IDragAndDropProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {DetailsListApp} from './DetailsListApp';

export default class DragAndDrop extends React.Component<IDragAndDropProps, {}> {
  public render(): React.ReactElement<IDragAndDropProps> {
    return (
      <div className={ styles.dragAndDrop }>        
        <DetailsListApp />
      </div>
    );
  }
}
