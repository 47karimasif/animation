export const TypeWriter = (props) => {
  const { text } = props;
  return (
    <h1 className="inline-block motion-preset-typewriter-[24] motion-loop-once">
      {text}
    </h1>
  );
};
