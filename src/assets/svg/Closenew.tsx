const MySVG = () => (
  <svg
    style={{ fill: "#ABB0B8", transition: "fill 0.3s ease-in-out" }}
    width='20'
    height='20'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    onMouseEnter={(e) => (e.currentTarget.style.fill = "#000000")}
    onMouseLeave={(e) => (e.currentTarget.style.fill = "#ABB0B8")}
  >
    <path d='M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z'></path>
    <rect width='100' height='100' fill='none' />
  </svg>
);

export default MySVG;
