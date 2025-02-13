import React from "react";

const GoogleIcon = ({ width = 22, height = 26, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1577_2808)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.12917 13.0001C6.12917 12.2062 6.26103 11.4451 6.49636 10.7312L2.37718 7.58569C1.57438 9.21569 1.12207 11.0524 1.12207 13.0001C1.12207 14.9462 1.57382 16.7818 2.37551 18.4107L6.49247 15.259C6.25936 14.5485 6.12917 13.7901 6.12917 13.0001Z"
          fill="#FBBC05"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3614 5.77783C15.0861 5.77783 16.6439 6.38894 17.8678 7.38894L21.4284 3.83339C19.2587 1.9445 16.477 0.777832 13.3614 0.777832C8.52456 0.777832 4.36755 3.54394 2.37695 7.58561L6.49613 10.7312C7.44525 7.85005 10.1508 5.77783 13.3614 5.77783Z"
          fill="#EB4335"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3614 20.2224C10.1508 20.2224 7.44525 18.1502 6.49613 15.269L2.37695 18.414C4.36755 22.4563 8.52456 25.2224 13.3614 25.2224C16.3468 25.2224 19.1969 24.1624 21.3361 22.1763L17.4261 19.1535C16.3228 19.8485 14.9337 20.2224 13.3614 20.2224Z"
          fill="#34A853"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.0446 13.0001C25.0446 12.2778 24.9333 11.5001 24.7664 10.7778H13.3613V15.5001H19.9262C19.598 17.1101 18.7045 18.3478 17.426 19.1534L21.336 22.1762C23.583 20.0906 25.0446 16.9839 25.0446 13.0001Z"
          fill="#4285F4"
        />
      </g>
      <defs>
        <clipPath id="clip0_1577_2808">
          <rect
            width="25"
            height="25"
            fill="white"
            transform="translate(0.75 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GoogleIcon;
