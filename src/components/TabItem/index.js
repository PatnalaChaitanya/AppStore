// Write your code here

import './index.css'

const TabItem = props => {
  const {tabdetails, getTabId, isActive} = props
  const {displayText, tabId} = tabdetails

  const OnclickTab = () => {
    getTabId(tabId)
  }

  const activeTab = isActive ? 'active-button' : ''

  return (
    <li className="list-name">
      <button
        type="button"
        className={`inactive ${activeTab}`}
        onClick={OnclickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
