import { IRecommendBrush } from './wireframe';

export type CategoryData = {
  id?: string;
  title?: any;
  catImg?: string;
  isOpen?: boolean;
  data: ItemData[];
};

export type ItemData = {
  id?: string;
  name?: any;
  size?: string;
  hex?: string;
  desc?: string;
  placement?: string;
  image?: string;
  isChecked?: boolean;
};

export interface EmitEventData extends ItemData {
  onlyChecked?: boolean;
  isDeleted?: boolean;
}

export interface ItemProps extends ItemData {}

export interface ItemDataProps extends ItemData {
  title?: string;
  cat_img?: string;
  is_open: boolean;
  dataSource: ItemData[];
  recommend_list?: IRecommendBrush[];
  onEmit: (data: EmitEventData) => void;
  onCollapse: (isOpen: boolean) => void;
}

export interface ItemDataEmitProps extends ItemData {
  onEmit: (data: EmitEventData) => void;
  recommend_list?: IRecommendBrush[];
}
