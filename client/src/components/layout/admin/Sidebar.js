import React from 'react'
import { useHistory } from "react-router-dom"

const Sidebar = () => {
  let history = useHistory()
  const [tab, setTab] = React.useState('/dashboard')

  const goPage = async location => {
    await history.push(`/`)
    if (location === 'overview') {
      await history.push(`/dashboard`)
      return
    }
    await history.push(`/dashboard`)
    await history.push(`/dashboard/${location}`)
  }

  React.useEffect(() => {
    setTab(history.location.pathname)
  }, [history.location.pathname])

  return (
    <div role="toolbar" aria-orientation="vertical" dir="ltr" className="dark:bg-customDark-1 transition-width transition-slowest ease dark:border-customDark-2 h-screen w-fit border-r-2 border-slate-300 bg-zinc-50 py-5 px-4 text-slate-500 transition duration-700 dark:border-r-2 dark:text-slate-400" tabIndex="0" data-orientation="vertical">
      <div className="mx-auto flex justify-center">
        <div className="mr-2"><svg width="85" height="38" viewBox="0 0 85 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0.00341797C1.40623 0.227764 2.81408 0.439917 4.22355 0.639877V11.1256C5.73545 11.1711 7.24816 11.215 8.76168 11.2573C8.76168 7.91811 8.76168 4.57812 8.76168 1.23732C10.1712 1.4129 11.5831 1.57546 12.9974 1.72503C12.9974 9.61777 12.9974 17.513 12.9974 25.4106C11.5847 25.5423 10.1728 25.687 8.76168 25.8446V14.781C7.24653 14.7907 5.73383 14.8021 4.22355 14.8151V26.4153C2.81408 26.6038 1.40623 26.8079 0 27.0273V0.00341797Z"
            fill="white"></path>
          <path
            d="M21.5609 25.0839C19.5004 25.2156 17.9324 24.8572 16.8521 23.9476C15.7718 23.038 15.2305 21.5968 15.2305 19.7118C15.2305 13.7992 15.2305 7.88653 15.2305 1.97388C16.6448 2.11531 18.0608 2.24537 19.4784 2.36404C19.4784 8.18078 19.4784 13.9975 19.4784 19.8143C19.4784 20.5881 19.6589 21.1384 20.0198 21.4651C20.4051 21.7903 20.9456 21.9366 21.6414 21.9041C22.3388 21.8748 22.8607 21.6846 23.2264 21.3359C23.5922 20.9872 23.8068 20.4361 23.8068 19.685C23.8068 14.0211 23.8068 8.35717 23.8068 2.69325C25.1724 2.78835 26.5404 2.86882 27.906 2.9371C27.906 8.40431 27.906 13.8723 27.906 19.3412C27.906 21.0823 27.3647 22.4332 26.2795 23.4282C25.1943 24.4231 23.6239 24.9547 21.5609 25.0839Z"
            fill="white"></path>
          <path
            d="M30.165 3.05151C32.3305 3.1458 34.4975 3.2149 36.6662 3.25879C38.7828 3.30268 40.3728 3.7465 41.4311 4.62437C42.4894 5.50225 43.0186 6.77761 43.0186 8.46508C43.0186 11.9815 43.0186 15.497 43.0186 19.0118C43.0186 20.6992 42.4886 21.9795 41.4287 22.8525C40.3703 23.7279 38.7828 24.1717 36.6662 24.2034C34.4975 24.2359 32.3288 24.2888 30.1602 24.3619C30.1634 17.2576 30.165 10.1542 30.165 3.05151ZM36.5784 21.2113C37.2758 21.2113 37.805 21.0488 38.1659 20.7236C38.5536 20.4017 38.7463 19.8848 38.7487 19.1678C38.7487 15.549 38.7487 11.9294 38.7487 8.30901C38.7487 7.59208 38.5536 7.07267 38.1683 6.75078C37.783 6.42889 37.2758 6.26307 36.5808 6.26307L34.4105 6.22406V21.2382L36.5784 21.2113Z"
            fill="white"></path>
          <path
            d="M45.1128 3.29573C47.2798 3.27134 49.4477 3.22095 51.6164 3.14454C53.733 3.06651 55.3181 3.43229 56.3764 4.28334C57.4347 5.13439 57.9615 6.44389 57.9615 8.19964C57.9615 11.8542 57.9615 15.512 57.9615 19.1731C57.9615 20.9321 57.4331 22.2448 56.3764 23.1113C55.3205 23.977 53.733 24.3599 51.6164 24.3013C49.4493 24.2428 47.2807 24.2046 45.1104 24.1867L45.1128 3.29573ZM51.5457 21.2653C52.2431 21.2783 52.7722 21.1263 53.1332 20.8093C53.5201 20.4842 53.7135 19.9607 53.7135 19.2389C53.7135 15.547 53.7135 11.8558 53.7135 8.1655C53.7135 7.43719 53.5201 6.91615 53.1332 6.60239C52.7722 6.28782 52.2431 6.14395 51.5481 6.16102L49.3802 6.21223V21.2361C50.102 21.2458 50.8239 21.2653 51.5457 21.2653Z"
            fill="white"></path>
          <path
            d="M60.0635 2.71007C61.4811 2.61416 62.8979 2.50768 64.3139 2.39062C64.3139 8.817 64.3139 15.2426 64.3139 21.6673C66.6435 21.7746 68.9707 21.9038 71.2954 22.055V25.4446C67.5571 25.091 63.814 24.8252 60.0635 24.6253C60.0651 17.3194 60.0651 10.0143 60.0635 2.71007Z"
            fill="white"></path>
          <path
            d="M72.5615 1.57628C76.4144 1.13734 80.26 0.613053 84.0983 0.00341797V3.86363C81.6597 4.14 79.2261 4.39361 76.7973 4.62445V11.2231L82.601 11.0525V14.8468C80.6697 14.8208 78.7351 14.8021 76.7973 14.7907V22.46C79.2358 22.6632 81.6695 22.8989 84.0983 23.1671V27.0273C80.26 26.4275 76.4169 25.9495 72.564 25.5642C72.564 17.5674 72.5631 9.57144 72.5615 1.57628Z"
            fill="white"></path>
          <path
            d="M29.9588 37.0098V28.2825H33.1548C33.7741 28.2825 34.2869 28.3848 34.6932 28.5893C35.0994 28.791 35.4034 29.0652 35.6051 29.4118C35.8068 29.7555 35.9077 30.1433 35.9077 30.5751C35.9077 30.9387 35.8409 31.2456 35.7074 31.4956C35.5739 31.7427 35.3949 31.9416 35.1705 32.0922C34.9489 32.2399 34.7045 32.3478 34.4375 32.416V32.5012C34.7273 32.5154 35.0099 32.6092 35.2855 32.7825C35.5639 32.9529 35.794 33.1958 35.9759 33.5112C36.1577 33.8265 36.2486 34.21 36.2486 34.6618C36.2486 35.1078 36.1435 35.5083 35.9332 35.8635C35.7259 36.2157 35.4048 36.4956 34.9702 36.7029C34.5355 36.9075 33.9801 37.0098 33.304 37.0098H29.9588ZM31.2756 35.8805H33.1761C33.8068 35.8805 34.2585 35.7583 34.5312 35.514C34.804 35.2697 34.9403 34.9643 34.9403 34.5978C34.9403 34.3223 34.8707 34.0694 34.7315 33.8393C34.5923 33.6092 34.3935 33.426 34.1349 33.2896C33.8793 33.1532 33.5753 33.085 33.223 33.085H31.2756V35.8805ZM31.2756 32.0581H33.0398C33.3352 32.0581 33.6009 32.0012 33.8366 31.8876C34.0753 31.774 34.2642 31.6149 34.4034 31.4103C34.5455 31.2029 34.6165 30.9586 34.6165 30.6774C34.6165 30.3166 34.4901 30.014 34.2372 29.7697C33.9844 29.5254 33.5966 29.4032 33.0739 29.4032H31.2756V32.0581ZM40.5291 37.1419C39.8842 37.1419 39.3288 37.0041 38.8629 36.7285C38.3999 36.4501 38.0419 36.0595 37.7891 35.5566C37.5391 35.051 37.4141 34.4586 37.4141 33.7797C37.4141 33.1092 37.5391 32.5183 37.7891 32.0069C38.0419 31.4956 38.3942 31.0964 38.8459 30.8095C39.3004 30.5225 39.8317 30.3791 40.4396 30.3791C40.8089 30.3791 41.1669 30.4402 41.5135 30.5623C41.8601 30.6845 42.1712 30.8762 42.4467 31.1376C42.7223 31.399 42.9396 31.7385 43.0987 32.1561C43.2578 32.5708 43.3374 33.0751 43.3374 33.6689V34.1206H38.1342V33.166H42.0888C42.0888 32.8308 42.0206 32.5339 41.8842 32.2754C41.7479 32.014 41.5561 31.8081 41.3089 31.6575C41.0646 31.5069 40.7777 31.4316 40.4482 31.4316C40.0902 31.4316 39.7777 31.5197 39.5107 31.6958C39.2464 31.8691 39.0419 32.0964 38.897 32.3777C38.755 32.6561 38.6839 32.9586 38.6839 33.2853V34.0311C38.6839 34.4686 38.7607 34.8407 38.9141 35.1475C39.0703 35.4544 39.2876 35.6887 39.5661 35.8507C39.8445 36.0098 40.1697 36.0893 40.5419 36.0893C40.7834 36.0893 41.0036 36.0552 41.2024 35.987C41.4013 35.916 41.5732 35.8109 41.718 35.6717C41.8629 35.5325 41.9737 35.3606 42.0504 35.1561L43.2564 35.3734C43.1598 35.7285 42.9865 36.0396 42.7365 36.3066C42.4893 36.5708 42.1783 36.7768 41.8033 36.9245C41.4311 37.0694 41.0064 37.1419 40.5291 37.1419ZM47.8065 30.4643V31.487H44.2312V30.4643H47.8065ZM45.19 28.8961H46.4641V35.0879C46.4641 35.335 46.5011 35.5211 46.5749 35.6461C46.6488 35.7683 46.744 35.8521 46.8604 35.8975C46.9798 35.9402 47.109 35.9615 47.2482 35.9615C47.3505 35.9615 47.44 35.9544 47.5167 35.9402C47.5934 35.926 47.6531 35.9146 47.6957 35.9061L47.9258 36.9586C47.8519 36.987 47.7468 37.0154 47.6104 37.0439C47.4741 37.0751 47.3036 37.0922 47.0991 37.095C46.7638 37.1007 46.4513 37.041 46.1616 36.916C45.8718 36.791 45.6374 36.5978 45.4585 36.3365C45.2795 36.0751 45.19 35.747 45.19 35.3521V28.8961ZM51.1207 37.1547C50.706 37.1547 50.331 37.0779 49.9957 36.9245C49.6605 36.7683 49.3949 36.5424 49.1989 36.247C49.0057 35.9515 48.9091 35.5893 48.9091 35.1603C48.9091 34.791 48.9801 34.487 49.1222 34.2484C49.2642 34.0098 49.456 33.8208 49.6974 33.6816C49.9389 33.5424 50.2088 33.4373 50.5071 33.3663C50.8054 33.2953 51.1094 33.2413 51.419 33.2044C51.8111 33.1589 52.1293 33.122 52.3736 33.0936C52.6179 33.0623 52.7955 33.0126 52.9062 32.9444C53.017 32.8762 53.0724 32.7654 53.0724 32.612V32.5822C53.0724 32.21 52.9673 31.9217 52.7571 31.7172C52.5497 31.5126 52.2401 31.4103 51.8281 31.4103C51.3991 31.4103 51.0611 31.5055 50.8139 31.6958C50.5696 31.8833 50.4006 32.0922 50.3068 32.3223L49.1094 32.0495C49.2514 31.6518 49.4588 31.3308 49.7315 31.0865C50.0071 30.8393 50.3239 30.6603 50.6818 30.5495C51.0398 30.4359 51.4162 30.3791 51.8111 30.3791C52.0724 30.3791 52.3494 30.4103 52.642 30.4728C52.9375 30.5325 53.2131 30.6433 53.4688 30.8052C53.7273 30.9672 53.9389 31.1987 54.1037 31.4998C54.2685 31.7981 54.3509 32.1859 54.3509 32.6632V37.0098H53.1065V36.1149H53.0554C52.973 36.2797 52.8494 36.4416 52.6847 36.6007C52.5199 36.7598 52.3082 36.8919 52.0497 36.997C51.7912 37.1021 51.4815 37.1547 51.1207 37.1547ZM51.3977 36.1319C51.75 36.1319 52.0511 36.0623 52.3011 35.9231C52.554 35.7839 52.7457 35.6021 52.8764 35.3777C53.0099 35.1504 53.0767 34.9075 53.0767 34.649V33.8052C53.0313 33.8507 52.9432 33.8933 52.8125 33.9331C52.6847 33.97 52.5384 34.0027 52.3736 34.0311C52.2088 34.0566 52.0483 34.0808 51.892 34.1035C51.7358 34.1234 51.6051 34.1404 51.5 34.1547C51.2528 34.1859 51.027 34.2385 50.8224 34.3123C50.6207 34.3862 50.4588 34.4927 50.3366 34.6319C50.2173 34.7683 50.1577 34.9501 50.1577 35.1774C50.1577 35.4927 50.2741 35.7314 50.5071 35.8933C50.7401 36.0524 51.0369 36.1319 51.3977 36.1319Z"
            fill="white"></path>
        </svg></div>
        <div>
          <svg width="42" height="29" viewBox="0 0 42 29" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M23.728 0.614746H6.17046C4.74762 0.614746 3.38306 1.17996 2.37697 2.18606C1.37088 3.19215 0.805664 4.55671 0.805664 5.97954V23.537C0.805664 24.9599 1.37088 26.3244 2.37697 27.3305C3.38306 28.3366 4.74762 28.9018 6.17046 28.9018H23.728C25.1508 28.9018 26.5153 28.3366 27.5214 27.3305C28.5275 26.3244 29.0927 24.9599 29.0927 23.537V5.97954C29.0927 4.55671 28.5275 3.19215 27.5214 2.18606C26.5153 1.17996 25.1508 0.614746 23.728 0.614746V0.614746Z" fill="#246BFD"></path>
            <path d="M38.5948 5.67255C38.3483 5.72543 38.1141 5.82474 37.9047 5.96517L33.7226 8.51101C33.0671 8.91347 32.5289 9.48109 32.1619 10.157C31.7851 10.8473 31.588 11.6213 31.5889 12.4078V17.1191C31.5885 17.9073 31.7864 18.683 32.1644 19.3747C32.5331 20.0525 33.0739 20.621 33.7323 21.0232L37.9462 23.569C38.219 23.7376 38.5236 23.848 38.8411 23.8933C39.1568 23.9374 39.4783 23.915 39.7848 23.8275C40.0946 23.738 40.3832 23.5871 40.6334 23.3837C40.8871 23.1754 41.0975 22.9194 41.2528 22.6302C41.4646 22.2341 41.5751 21.7918 41.5747 21.3426V8.1501C41.5739 7.76784 41.4907 7.39023 41.3309 7.04301C41.1727 6.70169 40.9413 6.39944 40.6529 6.15782C40.3703 5.92141 40.0362 5.7544 39.6775 5.67011C39.3216 5.58473 38.9504 5.58557 38.5948 5.67255Z" fill="#246BFD"></path>
            <path d="M11.088 23.915C9.77771 23.915 8.77547 23.5338 8.0813 22.7713C7.38713 22.0089 7.04004 20.9327 7.04004 19.5427V10.3982C7.04004 9.00496 7.38713 7.92794 8.0813 7.16711C8.77547 6.40629 9.77771 6.02506 11.088 6.02344C12.3886 6.02344 13.39 6.40466 14.0923 7.16711C14.7946 7.92956 15.1417 9.00659 15.1336 10.3982V19.5427C15.1336 20.9327 14.7865 22.0089 14.0923 22.7713C13.3981 23.5338 12.3967 23.915 11.088 23.915ZM11.088 21.4301C12.0065 21.4301 12.4666 20.8611 12.4682 19.7232V10.2226C12.4682 9.08462 12.0082 8.51563 11.088 8.51563C10.1679 8.51563 9.707 9.08462 9.70537 10.2226V19.7158C9.70537 20.8603 10.1663 21.4318 11.088 21.4301Z" fill="white"></path>
            <path d="M20.1876 10.3982H17.4004V8.45959C18.0123 8.47724 18.6237 8.40995 19.2171 8.25963C19.6458 8.15588 20.0359 7.93165 20.3413 7.61342C20.6642 7.21426 20.9121 6.75984 21.0728 6.27222H22.8652V23.6663H20.1876V10.3982Z" fill="white"></path>
          </svg>
        </div>
      </div>
      <div role="group" dir="ltr" data-orientation="vertical" aria-label="Sidebar" className="mt-8">
        <div className="pb-4">
          <button onClick={() => goPage('overview')} type="button" data-state="off" role="radio" aria-checked="false" aria-label="overview" className={" flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold " + (tab === '/dashboard' ? 'dark:bg-rgbColors-1' : '')} tabIndex="-1" data-orientation="vertical" data-radix-collection-item="">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.35843 1.72925H7.17509C8.35009 1.72925 9.29176 2.68758 9.29176 3.86341V6.70425C9.29176 7.88758 8.35009 8.83758 7.17509 8.83758H4.35843C3.19176 8.83758 2.24176 7.88758 2.24176 6.70425V3.86341C2.24176 2.68758 3.19176 1.72925 4.35843 1.72925ZM4.35843 11.8376H7.17509C8.35009 11.8376 9.29176 12.7884 9.29176 13.9718V16.8126C9.29176 17.9876 8.35009 18.9459 7.17509 18.9459H4.35843C3.19176 18.9459 2.24176 17.9876 2.24176 16.8126V13.9718C2.24176 12.7884 3.19176 11.8376 4.35843 11.8376ZM17.2251 1.72925H14.4084C13.2334 1.72925 12.2918 2.68758 12.2918 3.86341V6.70425C12.2918 7.88758 13.2334 8.83758 14.4084 8.83758H17.2251C18.3918 8.83758 19.3418 7.88758 19.3418 6.70425V3.86341C19.3418 2.68758 18.3918 1.72925 17.2251 1.72925ZM14.4084 11.8376H17.2251C18.3918 11.8376 19.3418 12.7884 19.3418 13.9718V16.8126C19.3418 17.9876 18.3918 18.9459 17.2251 18.9459H14.4084C13.2334 18.9459 12.2918 17.9876 12.2918 16.8126V13.9718C12.2918 12.7884 13.2334 11.8376 14.4084 11.8376Z" fill="#777E91"></path>
              </svg>
            </div>
            <div className="ml-2 capitalize ">overview</div>
          </button>
          <button onClick={() => goPage('meetings')} type="button" data-state="off" role="radio" aria-checked="false" aria-label="meetings" className={" flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold " + (tab === '/dashboard/meetings' ? 'dark:bg-rgbColors-1' : '')} tabIndex="-1" data-orientation="vertical" data-radix-collection-item="">
            <div>
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3286 6.87469L9.32063 11.6952L3.62473 8.30223C2.80863 7.81595 2.97839 6.63536 3.90148 6.37827L17.425 2.60647C18.2703 2.37052 19.0537 3.12319 18.8026 3.93083L14.8017 16.8015C14.5276 17.6818 13.295 17.8391 12.7893 17.0585L9.31797 11.696" stroke="#777E91" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </div>
            <div className="ml-2 capitalize dark:text-slate-400 ">meetings</div>
          </button>
          <button onClick={() => goPage('storage')} type="button" data-state="off" role="radio" aria-checked="false"
            aria-label="storage" className={" flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold " + (tab === '/dashboard/storage' ? 'dark:bg-rgbColors-1' : '')} tabIndex="-1" data-orientation="vertical" data-radix-collection-item="">
            <div><svg width="22" height="21" viewBox="0 0 22 21" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M19.2927 13.1725C19.2927 16.1542 17.4473 17.9117 14.3165 17.9117H7.50728C4.36865 17.9117 2.51978 16.1542 2.51978 13.1725V6.6725C2.51978 3.695 3.66953 1.9375 6.80115 1.9375H8.55115C9.1794 1.93833 9.7709 2.21917 10.1472 2.69833L10.946 3.71C11.324 4.18833 11.9155 4.47 12.5438 4.47083H15.02C18.1587 4.47083 19.3172 5.9925 19.3172 9.035L19.2927 13.1725Z"
                stroke="#777E91" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="1.5"></path>
              <path d="M7.09698 12.1149H14.7401" stroke="#777E91" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg></div>
            <div className="ml-2 capitalize dark:text-slate-400 ">storage</div>
          </button>
          <button onClick={() => goPage('collections')} type="button" data-state="off" role="radio" aria-checked="false" aria-label="collections" className={" flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold " + (tab === '/dashboard/collections' ? 'dark:bg-rgbColors-1' : '')} tabIndex="-1" data-orientation="vertical" data-radix-collection-item="">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.3561 17.0767C16.9169 17.0767 18.1827 15.8117 18.1836 14.2508V14.2492V11.9992C17.1527 11.9992 16.3177 11.1642 16.3169 10.1333C16.3169 9.10333 17.1519 8.2675 18.1827 8.2675H18.1836V6.0175C18.1852 4.45583 16.9211 3.18917 15.3602 3.1875H15.3552H5.59524C4.03357 3.1875 2.76774 4.4525 2.76691 6.01417V6.015V8.34C3.76191 8.305 4.59607 9.08333 4.63107 10.0783C4.63191 10.0967 4.63274 10.115 4.63274 10.1333C4.63357 11.1625 3.80107 11.9975 2.77191 11.9992H2.76691V14.2492C2.76607 15.81 4.03191 17.0767 5.59274 17.0767H5.59357H15.3561Z" stroke="#777E91" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M10.7845 7.61511L11.2978 8.65427C11.3478 8.75594 11.4445 8.82677 11.557 8.84344L12.7045 9.01094C12.9886 9.05261 13.1011 9.40094 12.8961 9.60011L12.0661 10.4084C11.9845 10.4876 11.9478 10.6018 11.9661 10.7143L12.162 11.8559C12.2103 12.1384 11.9145 12.3534 11.6611 12.2201L10.6353 11.6809C10.5345 11.6276 10.4145 11.6276 10.3136 11.6809L9.28865 12.2201C9.03448 12.3534 8.73865 12.1384 8.78698 11.8559L8.98282 10.7143C9.00198 10.6018 8.96448 10.4876 8.88282 10.4084L8.05365 9.60011C7.84865 9.40094 7.96115 9.05261 8.24448 9.01094L9.39198 8.84344C9.50448 8.82677 9.60198 8.75594 9.65198 8.65427L10.1645 7.61511C10.2911 7.35844 10.6578 7.35844 10.7845 7.61511Z" stroke="#777E91" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </div>
            <div className="ml-2 capitalize dark:text-slate-400 ">collections</div>
          </button>
        </div>
        <div className="transition-border border-b-2 border-t-2 border-slate-300 py-4 duration-700 dark:border-b-2 dark:border-t-2 dark:border-[#23262F]">
          <button onClick={() => goPage('profile')} type="button" data-state="off" role="radio" aria-checked="false" aria-label="collections" className={" flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold flex  items-center w-48 rounded-lg  p-4 text-xs font-semibold " + (tab === '/dashboard/profile' ? 'dark:bg-rgbColors-1' : '')} tabIndex="-1" data-orientation="vertical" data-radix-collection-item="">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.9632 12.848C7.74017 12.848 4.98779 13.3353 4.98779 15.2869C4.98779 17.2385 7.72271 17.7433 10.9632 17.7433C14.1862 17.7433 16.9378 17.2552 16.9378 15.3044C16.9378 13.3536 14.2037 12.848 10.9632 12.848Z" stroke="#777E91" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M10.9632 10.0644C13.0783 10.0644 14.7926 8.34935 14.7926 6.23427C14.7926 4.11919 13.0783 2.40491 10.9632 2.40491C8.84816 2.40491 7.13308 4.11919 7.13308 6.23427C7.12594 8.34221 8.82911 10.0573 10.9363 10.0644H10.9632Z" stroke="#777E91" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42857"></path>
              </svg>
            </div>
            <div className="ml-2 capitalize transition-none dark:text-slate-400">profile</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar