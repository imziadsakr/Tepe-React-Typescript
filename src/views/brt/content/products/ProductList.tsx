/* eslint-disable no-nested-ternary */
import * as React from 'react';

// Material-UI
import {
  List,
  ListItemButton,
  ListItemText,
  Checkbox,
  Button,
} from '@mui/material';

// Types
import { ItemDataEmitProps } from 'types/interdental';

// Assets
import CircleIcon from '@mui/icons-material/Circle';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// hook
import { usePtStorage } from 'contexts/StorageContext';
import { StorageProps } from 'types/storagecontext';

// Third Party
import { FormattedMessage } from 'react-intl';

// =============================|| PRODUCT LIST ||============================= //

const ProductList = (props: ItemDataEmitProps) => {
  const { ptLocale } = usePtStorage() as StorageProps;

  const [is_assigned, setIsAssigned] = React.useState<boolean>(false);

  const { id, name, size, hex, isChecked, recommend_list, onEmit } = props;

  const handleClick = (onlyChecked?: boolean, isDeleted?: boolean) => {
    onEmit({
      id,
      isChecked: !isChecked,
      onlyChecked,
      isDeleted,
    });
  };

  React.useEffect(() => {
    const find_index = recommend_list?.findIndex(brush => brush.id === id);
    if (find_index !== -1) {
      setIsAssigned(true);
      onEmit({
        id,
        isChecked,
        onlyChecked: true,
      });
    } else {
      setIsAssigned(false);
      onEmit({
        id,
        isChecked: false,
        onlyChecked: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recommend_list]);

  return (
    <List component="div" disablePadding>
      <ListItemButton className="prod-item-outline">
        <CircleIcon sx={{ color: hex }} />
        <ListItemText className="left-item" primary={size} />
        <ListItemText className="right-item" primary={name?.[ptLocale]} />
        {!is_assigned ? (
          !isChecked ? (
            <Button
              variant="contained"
              className="assign-btn"
              onClick={() => handleClick(false)}
            >
              <FormattedMessage id="assign" />
            </Button>
          ) : (
            <Checkbox
              icon={<CircleIcon className="disabled-icon" />}
              checkedIcon={<CloseIcon className="checked-icon" />}
              checked={isChecked}
              color="primary"
              onClick={() => handleClick(false)}
            />
          )
        ) : (
          <Button
            variant="outlined"
            className="assigned-btn"
            onClick={() => handleClick(false, true)}
          >
            <DoneIcon /> &nbsp; <FormattedMessage id="assigned" />
          </Button>
        )}
      </ListItemButton>
    </List>
  );
};

export default ProductList;
