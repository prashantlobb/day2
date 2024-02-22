import {View, Text} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CustomSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item marginLeft={10} marginTop={10}>
          <SkeletonPlaceholder.Item width={300} height={20} />
          <SkeletonPlaceholder.Item marginTop={6} width={200} height={30} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default CustomSkeleton;
