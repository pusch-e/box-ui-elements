import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import InfoBadge16 from '../../../icon/fill/InfoBadge16';
import Toggle from '../../../components/toggle';
import Tooltip from '../../../components/tooltip';
import messages from '../messages';

const ContentExplorerIncludeSubfolders = ({ isDisabled, onChange, tooltipMessage }) => (
    <div className="bdl-ContentExplorerIncludeSubfolders">
        <Toggle
            className="bdl-ContentExplorerIncludeSubfolders-toggle"
            label={<FormattedMessage {...messages.includeSubfolders} />}
            isDisabled={isDisabled}
            onChange={onChange}
        />
        {tooltipMessage && (
            <Tooltip text={<FormattedMessage {...tooltipMessage} />}>
                <InfoBadge16 className="bdl-ContentExplorerIncludeSubfolders-icon" fill="blue" />
            </Tooltip>
        )}
    </div>
);

ContentExplorerIncludeSubfolders.propTypes = {
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
    tooltipMessage: PropTypes.object,
};

export { ContentExplorerIncludeSubfolders as ContentExplorerIncludeSubfoldersBase };
export default injectIntl(ContentExplorerIncludeSubfolders);
