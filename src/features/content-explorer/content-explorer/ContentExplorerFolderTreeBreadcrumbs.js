import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Arrow16 from '../../../icon/fill/Arrow16';
import Button from '../../../components/button';
import DropdownMenu from '../../../components/dropdown-menu/DropdownMenu';
import IconFolderTree from '../../../icons/general/IconFolderTree';
import { Menu, MenuItem } from '../../../components/menu';

import { FoldersPathPropType } from '../prop-types';
import messages from '../messages';
import {
    FOLDER_TREE_ICON_HEIGHT,
    FOLDER_TREE_ICON_WIDTH,
    BREADCRUMB_ARROW_ICON_HEIGHT,
    BREADCRUMB_ARROW_ICON_WIDTH,
    BREADCRUMB_ARROW_ICON_VIEWBOX,
} from './constants';

const ContentExplorerFolderTreeBreadcrumbs = ({
    foldersPath,
    intl: { formatMessage },
    isFolderTreeButtonDisabled = false,
    numTotalItems,
    onBreadcrumbClick,
}) => (
    <div className="bdl-ContentExplorerFolderTreeBreadcrumbs">
        <DropdownMenu>
            <Button
                aria-label={formatMessage(messages.clickToViewPath)}
                className="bdl-ContentExplorerFolderTreeBreadcrumbs-button"
                isDisabled={isFolderTreeButtonDisabled}
                title="file path"
                type="button"
            >
                <IconFolderTree height={FOLDER_TREE_ICON_HEIGHT} width={FOLDER_TREE_ICON_WIDTH} />
            </Button>
            <Menu>
                {foldersPath.map((folder, i) => (
                    <MenuItem
                        data-testid="folder-tree-item"
                        key={folder.id}
                        onClick={event => onBreadcrumbClick(i, event)}
                    >
                        {folder.name}
                    </MenuItem>
                ))}
            </Menu>
        </DropdownMenu>
        <Arrow16
            className="bdl-ContentExplorerFolderTreeBreadcrumbs-iconArrow16"
            height={BREADCRUMB_ARROW_ICON_HEIGHT}
            width={BREADCRUMB_ARROW_ICON_WIDTH}
            viewBox={BREADCRUMB_ARROW_ICON_VIEWBOX}
        />
        <span
            className="bdl-ContentExplorerFolderTreeBreadcrumbs-text"
            title={foldersPath[foldersPath.length - 1].name}
        >
            {`${foldersPath[foldersPath.length - 1].name} (${numTotalItems})`}
        </span>
    </div>
);

ContentExplorerFolderTreeBreadcrumbs.propTypes = {
    foldersPath: FoldersPathPropType.isRequired,
    intl: PropTypes.any,
    isFolderTreeButtonDisabled: PropTypes.bool,
    numTotalItems: PropTypes.number.isRequired,
    onBreadcrumbClick: PropTypes.func,
};

export { ContentExplorerFolderTreeBreadcrumbs as ContentExplorerFolderTreeBreadcrumbsBase };
export default injectIntl(ContentExplorerFolderTreeBreadcrumbs);
