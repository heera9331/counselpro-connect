/**
 * @date 12-02-2024
 * @author Heera Singh Lodhi
 * @description loader
 * @param message: string
 * @returns jsx
 */

import React from "react";

interface InputProps {
  message?: string;
}

const Loading: React.FC = ({ message }: InputProps) => {
  return (
    <div className="flex items-center justify-center m-auto my-4">
      <div
        aria-label="Loading..."
        role="status"
        className="flex items-center space-x-2"
      >
        {/* <svg
          className="h-20 w-20 animate-spin stroke-gray-500"
          viewBox="0 0 256 256"
        >
          <line
            x1={128}
            y1={32}
            x2={128}
            y2={64}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1="195.9"
            y1="60.1"
            x2="173.3"
            y2="82.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={224}
            y1={128}
            x2={192}
            y2={128}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          ></line>
          <line
            x1="195.9"
            y1="195.9"
            x2="173.3"
            y2="173.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={128}
            y1={224}
            x2={128}
            y2={192}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          ></line>
          <line
            x1="60.1"
            y1="195.9"
            x2="82.7"
            y2="173.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={32}
            y1={128}
            x2={64}
            y2={128}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1="60.1"
            y1="60.1"
            x2="82.7"
            y2="82.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          ></line>
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={415}
          height={228}
          viewBox="0 0 415 228"
        >
          <defs>
            <radialGradient
              id="radial-gradient"
              cx="0.5"
              cy="0.5"
              r="0.5"
              gradientUnits="objectBoundingBox"
            >
              <stop offset={0} stopColor="#ddd" />
              <stop offset={1} stopColor="#fff" />
            </radialGradient>
          </defs>
          <g id="process" transform="translate(-492 -434)">
            <g id="circles">
              <g
                id="Ellipse_9"
                data-name="Ellipse 9"
                transform="translate(574 527)"
                fill="#fff"
                stroke="#777"
                strokeWidth={3}
                opacity="0.15"
              >
                <circle cx={8} cy={8} r={8} stroke="none" />
                <circle cx={8} cy={8} r="6.5" fill="none" />
                <animate
                  attributeName="opacity"
                  values="0;0.25;0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </g>
              <g
                id="Ellipse_13"
                data-name="Ellipse 13"
                transform="translate(895 567)"
                fill="#fff"
                stroke="#777"
                strokeWidth={2}
                opacity="0.3"
              >
                <circle cx={6} cy={6} r={6} stroke="none" />
                <circle cx={6} cy={6} r={5} fill="none" />
                <animate
                  attributeName="opacity"
                  values="0;0.6;0"
                  dur="1.3s"
                  repeatCount="indefinite"
                />
              </g>
              <g
                id="Ellipse_14"
                data-name="Ellipse 14"
                transform="translate(592 440)"
                fill="#fff"
                stroke="#777"
                strokeWidth={2}
                opacity="0.15"
              >
                <circle cx={6} cy={6} r={6} stroke="none" />
                <circle cx={6} cy={6} r={5} fill="none" />
                <animate
                  attributeName="opacity"
                  values="0;0.25;0"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </g>
              <g
                id="Ellipse_10"
                data-name="Ellipse 10"
                transform="translate(845 460)"
                fill="#fff"
                stroke="#777"
                strokeWidth={3}
                opacity="0.3"
              >
                <circle cx={8} cy={8} r={8} stroke="none" />
                <circle cx={8} cy={8} r="6.5" fill="none" />
                <animate
                  attributeName="opacity"
                  values="0;0.6;0"
                  dur="1.9s"
                  repeatCount="indefinite"
                />
              </g>
              <g
                id="Ellipse_11"
                data-name="Ellipse 11"
                transform="translate(824 618)"
                fill="#fff"
                stroke="#777"
                strokeWidth={1}
                opacity="0.15"
              >
                <circle cx={4} cy={4} r={4} stroke="none" />
                <circle cx={4} cy={4} r="3.5" fill="none" />
                <animate
                  attributeName="opacity"
                  values="0;0.25;0"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </g>
              <g
                id="Ellipse_16"
                data-name="Ellipse 16"
                transform="translate(492 517)"
                fill="#fff"
                stroke="#777"
                strokeWidth={1}
                opacity="0.3"
              >
                <circle cx={4} cy={4} r={4} stroke="none" />
                <circle cx={4} cy={4} r="3.5" fill="none" />
                <animate
                  attributeName="opacity"
                  values="0;0.6;0"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </g>
              <g
                id="Ellipse_15"
                data-name="Ellipse 15"
                transform="translate(719 434)"
                fill="#fff"
                stroke="#777"
                strokeWidth={1}
                opacity="0.15"
              >
                <circle cx={4} cy={4} r={4} stroke="none" />
                <circle cx={4} cy={4} r="3.5" fill="none" />
                <animate
                  attributeName="opacity"
                  values="0;0.25;0"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </g>
              <g
                id="Ellipse_12"
                data-name="Ellipse 12"
                transform="translate(521 452)"
                fill="#fff"
                stroke="#777"
                strokeWidth={1}
                opacity="0.3"
              >
                <circle cx={4} cy={4} r={4} stroke="none" />
                <circle cx={4} cy={4} r="3.5" fill="none" />
                <animate
                  attributeName="opacity"
                  values="0;0.6;0"
                  dur="3.1s"
                  repeatCount="indefinite"
                />
              </g>
            </g>
            <g id="stars">
              <path
                id="Path_510"
                data-name="Path 510"
                d="M7.5-8.641,2.937-9.306.9-13.444a1,1,0,0,0-1.794,0L-2.938-9.306-7.5-8.641a1,1,0,0,0-.553,1.706l3.3,3.219L-5.534.831a1,1,0,0,0,1.45,1.053L0-.263,4.084,1.884A1,1,0,0,0,5.534.831L4.753-3.716l3.3-3.219A1,1,0,0,0,7.5-8.641Zm-4.359,4.4L3.884.084,0-1.956-3.884.084l.741-4.325L-6.288-7.3l4.344-.631L0-11.872,1.944-7.934,6.287-7.3Z"
                transform="matrix(0.966, 0.259, -0.259, 0.966, 826.447, 540.796)"
                fill="#777"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.6;0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                id="Path_509"
                data-name="Path 509"
                d="M7.5-8.641,2.937-9.306.9-13.444a1,1,0,0,0-1.794,0L-2.938-9.306-7.5-8.641a1,1,0,0,0-.553,1.706l3.3,3.219L-5.534.831a1,1,0,0,0,1.45,1.053L0-.263,4.084,1.884A1,1,0,0,0,5.534.831L4.753-3.716l3.3-3.219A1,1,0,0,0,7.5-8.641Zm-4.359,4.4L3.884.084,0-1.956-3.884.084l.741-4.325L-6.288-7.3l4.344-.631L0-11.872,1.944-7.934,6.287-7.3Z"
                transform="matrix(0.966, -0.259, 0.259, 0.966, 672.553, 471.795)"
                fill="#777"
                opacity="0.5"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.4;0"
                  dur="1.7s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                id="Path_508"
                data-name="Path 508"
                d="M7.5-8.641,2.937-9.306.9-13.444a1,1,0,0,0-1.794,0L-2.938-9.306-7.5-8.641a1,1,0,0,0-.553,1.706l3.3,3.219L-5.534.831a1,1,0,0,0,1.45,1.053L0-.263,4.084,1.884A1,1,0,0,0,5.534.831L4.753-3.716l3.3-3.219A1,1,0,0,0,7.5-8.641Zm-4.359,4.4L3.884.084,0-1.956-3.884.084l.741-4.325L-6.288-7.3l4.344-.631L0-11.872,1.944-7.934,6.287-7.3Z"
                transform="matrix(0.966, -0.259, 0.259, 0.966, 557.553, 495.795)"
                fill="#777"
                opacity="0.1"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.25;0"
                  dur="1.9s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                id="Path_507"
                data-name="Path 507"
                d="M4.689-5.4,1.836-5.816.561-8.4a.626.626,0,0,0-1.121,0L-1.836-5.816-4.689-5.4a.625.625,0,0,0-.346,1.066l2.064,2.012L-3.459.52a.625.625,0,0,0,.906.658L0-.164,2.553,1.178A.625.625,0,0,0,3.459.52L2.971-2.322,5.035-4.334A.625.625,0,0,0,4.689-5.4ZM1.965-2.65l.463,2.7L0-1.223-2.428.053l.463-2.7L-3.93-4.564l2.715-.395L0-7.42,1.215-4.959l2.715.395Z"
                transform="matrix(0.966, -0.259, 0.259, 0.966, 519.553, 584.795)"
                fill="#777"
                opacity="0.5"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.4;0"
                  dur="2.1s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                id="Path_506"
                data-name="Path 506"
                d="M4.689-5.4,1.836-5.816.561-8.4a.626.626,0,0,0-1.121,0L-1.836-5.816-4.689-5.4a.625.625,0,0,0-.346,1.066l2.064,2.012L-3.459.52a.625.625,0,0,0,.906.658L0-.164,2.553,1.178A.625.625,0,0,0,3.459.52L2.971-2.322,5.035-4.334A.625.625,0,0,0,4.689-5.4ZM1.965-2.65l.463,2.7L0-1.223-2.428.053l.463-2.7L-3.93-4.564l2.715-.395L0-7.42,1.215-4.959l2.715.395Z"
                transform="matrix(0.966, 0.259, -0.259, 0.966, 778.482, 455.795)"
                fill="#777"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.6;0"
                  dur="2.3s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
            <g id="shadow">
              <ellipse
                id="shadow-2"
                data-name="shadow"
                cx={80}
                cy={6}
                rx={100}
                ry={6}
                transform="translate(620 650)"
                fill="url(#radial-gradient)"
              />
            </g>
          </g>
          <g id="cog-bottom">
            <path
              id="cog-bottom"
              d="M269.481 194.85L268.778 193.753C267.625 193.837 266.5 193.837 265.347 193.753L264.644 194.878C263.013 197.466 259.834 198.647 256.909 197.719C253.028 196.509 250.441 195.244 247.263 192.628C244.731 190.547 244.113 186.919 245.744 184.078L246.447 182.869C245.8 181.912 245.238 180.928 244.731 179.887H242.172C238.909 179.887 236.153 177.581 235.534 174.375C234.803 170.522 234.775 167.569 235.563 163.547C236.153 160.369 238.966 158.062 242.2 158.062H244.731C245.238 157.022 245.8 156.037 246.447 155.081L245.716 153.816C244.084 151.003 244.703 147.431 247.178 145.294C250.159 142.734 252.719 141.272 256.6 139.95C259.638 138.909 262.984 140.147 264.616 142.931L265.347 144.169C266.5 144.084 267.625 144.084 268.778 144.169L269.509 142.931C271.141 140.147 274.488 138.909 277.553 139.978C281.294 141.244 283.825 142.678 286.975 145.35C289.45 147.459 290.041 151.031 288.409 153.844L287.678 155.081C288.325 156.037 288.888 157.022 289.394 158.062H290.828C294.091 158.062 296.847 160.369 297.466 163.575C298.197 167.428 298.225 170.381 297.438 174.403C296.847 177.581 294.034 179.887 290.8 179.887H289.394C288.888 180.928 288.325 181.912 287.678 182.869L288.381 184.078C290.041 186.947 289.366 190.575 286.834 192.656C283.825 195.131 281.238 196.425 277.272 197.691C274.319 198.591 271.113 197.437 269.481 194.85ZM272.913 185.119L275.894 190.266C277.778 189.478 279.522 188.466 281.153 187.228L278.172 182.081L279.972 179.972C281.322 178.369 282.391 176.569 283.066 174.6L283.994 171.984H289.928C290.181 169.987 290.181 167.934 289.928 165.937H283.994L283.066 163.322C282.363 161.353 281.322 159.553 279.972 157.95L278.172 155.841L281.153 150.694C279.55 149.456 277.778 148.444 275.894 147.656L272.913 152.803L270.184 152.297C268.131 151.903 266.022 151.903 263.969 152.297L261.241 152.803L258.259 147.656C256.375 148.444 254.631 149.456 253 150.694L255.981 155.841L254.181 157.95C252.831 159.553 251.763 161.353 251.088 163.322L250.159 165.937H244.225C243.972 167.934 243.972 169.987 244.225 171.984H250.159L251.088 174.6C251.791 176.569 252.831 178.369 254.181 179.972L255.981 182.081L253 187.228C254.603 188.466 256.375 189.478 258.259 190.266L261.241 185.119L263.969 185.625C266.022 186.019 268.131 186.019 270.184 185.625L272.913 185.119ZM275.5 168.75C275.5 163.772 271.478 159.75 266.5 159.75C261.522 159.75 257.5 163.772 257.5 168.75C257.5 173.728 261.522 177.75 266.5 177.75C271.478 177.75 275.5 173.728 275.5 168.75Z"
              fill="#A0A5AA"
            />
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="360 266.5 169"
              to="0 266.5 169"
              dur="2s"
              additive="sum"
              repeatCount="indefinite"
            />
          </g>
          <g id="cog-top">
            <path
              d="M269.481 109.237L268.778 108.141C267.625 108.225 266.5 108.225 265.347 108.141L264.644 109.266C263.013 111.853 259.834 113.034 256.909 112.106C253.028 110.897 250.441 109.631 247.263 107.016C244.731 104.934 244.113 101.306 245.744 98.4656L246.447 97.2562C245.8 96.3 245.238 95.3156 244.731 94.275H242.172C238.909 94.275 236.153 91.9687 235.534 88.7625C234.803 84.9094 234.775 81.9562 235.563 77.9344C236.153 74.7562 238.966 72.45 242.2 72.45H244.731C245.238 71.4094 245.8 70.425 246.447 69.4687L245.716 68.2031C244.084 65.3906 244.703 61.8187 247.178 59.6812C250.159 57.1219 252.719 55.6594 256.6 54.3375C259.638 53.2969 262.984 54.5344 264.616 57.3187L265.347 58.5562C266.5 58.4719 267.625 58.4719 268.778 58.5562L269.509 57.3187C271.141 54.5344 274.488 53.2969 277.553 54.3656C281.294 55.6312 283.825 57.0656 286.975 59.7375C289.45 61.8469 290.041 65.4187 288.409 68.2312L287.678 69.4687C288.325 70.425 288.888 71.4094 289.394 72.45H290.828C294.091 72.45 296.847 74.7562 297.466 77.9625C298.197 81.8156 298.225 84.7687 297.438 88.7906C296.847 91.9687 294.034 94.275 290.8 94.275H289.394C288.888 95.3156 288.325 96.3 287.678 97.2562L288.381 98.4656C290.041 101.334 289.366 104.962 286.834 107.044C283.825 109.519 281.238 110.812 277.272 112.078C274.319 113.006 271.113 111.853 269.481 109.237ZM272.913 99.5344L275.894 104.681C277.778 103.894 279.522 102.881 281.153 101.644L278.172 96.4969L279.972 94.3875C281.322 92.7844 282.391 90.9844 283.066 89.0156L283.994 86.4H289.928C290.181 84.4031 290.181 82.35 289.928 80.3531H283.994L283.066 77.7375C282.363 75.7687 281.322 73.9687 279.972 72.3656L278.172 70.2562L281.125 65.0812C279.522 63.8437 277.75 62.8312 275.866 62.0437L272.884 67.1906L270.156 66.6844C268.103 66.2906 265.994 66.2906 263.941 66.6844L261.213 67.1906L258.231 62.0437C256.375 62.8031 254.603 63.8437 253 65.0812L255.981 70.2281L254.181 72.3375C252.831 73.9406 251.763 75.7406 251.088 77.7094L250.159 80.325H244.225C243.972 82.3219 243.972 84.375 244.225 86.3719H250.159L251.088 88.9875C251.791 90.9562 252.831 92.7562 254.181 94.3594L255.981 96.4687L253 101.644C254.603 102.881 256.375 103.894 258.259 104.681L261.241 99.5344L263.969 100.041C266.022 100.434 268.131 100.434 270.184 100.041L272.913 99.5344ZM275.5 83.1656C275.5 78.1875 271.478 74.1656 266.5 74.1656C261.522 74.1656 257.5 78.1875 257.5 83.1656C257.5 88.1437 261.522 92.1656 266.5 92.1656C271.478 92.1656 275.5 88.1156 275.5 83.1656Z"
              fill="#00A0D2"
            />
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="360 266.5 83.5"
              to="0 266.5 83.5"
              dur="2s"
              additive="sum"
              repeatCount="indefinite"
            />
          </g>
          <g id="cog-left">
            <path
              d="M159.458 179.912V171.167C155.778 169.645 152.297 167.68 149.072 165.328L141.226 169.728C138.43 171.277 134.92 170.752 132.752 168.455C125.847 161.177 121.766 154.756 118.314 144.074C117.344 141.113 118.628 137.903 121.395 136.326L129.185 131.925C128.7 128.051 128.7 124.149 129.185 120.275L121.395 115.902C118.628 114.353 117.344 111.115 118.314 108.154C121.766 97.5271 125.79 91.1068 132.752 83.7733C134.92 81.4764 138.458 80.9506 141.226 82.5003L149.044 86.9004C152.268 84.5482 155.749 82.611 159.43 81.0613V72.3164C159.43 69.1893 161.655 66.5049 164.794 65.8408C174.695 63.6822 182.484 63.4332 193.812 65.8408C196.95 66.5049 199.204 69.217 199.204 72.3164V81.0613C202.885 82.5833 206.366 84.5482 209.59 86.8727L217.408 82.5003C220.205 80.9506 223.743 81.4764 225.911 83.7733C233.586 91.9647 237.752 99.2429 240.777 108.264C241.747 111.17 240.548 114.325 237.866 115.93L230.733 120.303C231.218 124.177 231.218 128.079 230.733 131.953L238.751 136.796C241.205 138.29 242.46 141.113 241.832 143.853C239.864 152.515 232.417 161.73 225.883 168.538C223.714 170.807 220.205 171.305 217.437 169.755L209.59 165.355C206.366 167.707 202.885 169.645 199.204 171.194V179.939C199.204 183.039 196.979 185.751 193.84 186.415C183.14 188.712 175.322 188.684 164.765 186.415C161.684 185.723 159.458 183.011 159.458 179.912ZM168.589 178.196C175.665 179.579 182.998 179.579 190.074 178.196V164.995L193.127 163.944C197.92 162.311 202.343 159.821 206.223 156.61L208.677 154.563L220.49 161.177C225.283 155.891 230.191 149.747 232.502 143.133L220.69 136.519L221.289 133.448C222.202 128.577 222.202 123.623 221.289 118.753L220.69 115.681L232.502 109.067C230.191 102.453 225.283 96.2818 220.49 91.0238L208.677 97.6378L206.223 95.59C202.343 92.3521 197.949 89.8892 193.127 88.2564L190.074 87.2048V74.0322C182.998 72.6485 175.665 72.6485 168.589 74.0322V87.2325L165.536 88.2841C160.742 89.9169 156.32 92.4075 152.439 95.6176L149.985 97.6655L138.173 91.0515C133.395 96.3189 129.74 102.451 127.416 109.095L139.228 115.709L138.629 118.78C137.716 123.651 137.716 128.605 138.629 133.475L139.228 136.547L127.416 143.161C129.727 149.775 133.379 155.946 138.173 161.204L149.985 154.59L152.439 156.638C156.32 159.876 160.714 162.339 165.536 163.972L168.589 165.023V178.196ZM179.545 149.055C166.506 149.055 155.892 138.761 155.892 126.114C155.892 113.467 166.506 103.173 179.545 103.173C192.585 103.173 203.199 113.467 203.199 126.114C203.199 138.761 192.585 149.055 179.545 149.055ZM179.545 112.028C171.556 112.028 165.022 118.338 165.022 126.114C165.022 133.89 171.528 140.2 179.545 140.2C187.535 140.2 194.069 133.89 194.069 126.114C194.069 118.338 187.563 112.028 179.545 112.028Z"
              fill="#0073AA"
            />
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 180 126"
              to="360 180 126"
              dur="3s"
              additive="sum"
              repeatCount="indefinite"
            />
          </g>
        </svg>

        {/* <span className="text-4xl font-medium text-gray-500">Loading...</span> */}
      </div>
    </div>
  );
};

export default Loading;
