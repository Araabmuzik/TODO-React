const InputField = ({
  type = "text",
  id,
  buttonText,
  placeholderText = "Введите текст",
  searchIcon = false,
}) => {
  return (
    <>
      <form className="relative flex flex-row justify-between gap-4">
        <div className="flex flex-col relative flex-1 ">
          <input
            className=" relative z-8 peer w-full text-sm border border-[#d9d9d9] p-3 rounded-lg focus-visible:outline-0  focus:border-black"
            type={type}
            id={id}
            placeholder=" "
          />
          <label
            className="px-1 text-[#b3b3b3] bg-white absolute  transition-all translate-y-1/2 left-3 text-sm peer-focus:translate-y-[-50%] peer-focus:z-10 peer-focus:text-black peer-focus:text-xs"
            htmlFor={id}
          >
            {placeholderText}
          </label>
        </div>
        {buttonText && (
          <button
            className="bg-[#2c2c2c] text-white p-3 rounded-lg"
            type="button"
          >
            {buttonText}
          </button>
        )}
        {searchIcon && (
          <svg
            className="absolute right-3 top-3"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
              stroke="#1E1E1E"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        )}
      </form>
    </>
  );
};
export default InputField;
