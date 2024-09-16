import React from 'react';
import { View } from 'react-native';

/**
 * This file is web-only and used to configure the root HTML for every web page during static rendering.
 * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
 */
export default function CustomHtml() {
  return (
    <View>
      {/* 这里的内容在移动应用中不会直接显示，但可能会影响 Web 版本 */}
    </View>
  );
}
