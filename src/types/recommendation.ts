import { IRecommendBrushGroup } from './wireframe';

export type RecommendationData = {
  recommend_brush: IRecommendBrushGroup;
};

export interface RecommendationProps extends RecommendationData {}
