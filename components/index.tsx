import React from 'react';

import { Tag } from 'antd';
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  text?: string;
  color?: string;

}

class LmTag extends React.Component<TagProps> {
  constructor(props: TagProps) {
    super(props);
  }
  render() {
    const {color, text} = this.props;
    return (
      <Tag color={color}>{text}</Tag>
    )
  }
}

export default LmTag;
