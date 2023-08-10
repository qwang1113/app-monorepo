import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgOsmosis = (props: SvgProps) => (
  <Svg viewBox="0 0 16 16" fill="none" accessibilityRole="image" {...props}>
    <Rect x={0.5} y={0.5} width={15} height={15} rx={7.5} fill="#303040" />
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.535 3.547c.588.437.915.829 1.017 1.22a.814.814 0 0 1-.139.689.777.777 0 0 1-.646.31c-.102 0-.204-.014-.306-.044-.101.288-.174.57-.196.814l-.007.088a4.322 4.322 0 0 0-2.36-1.974c.029-.008.247-.074.631-.311a1.801 1.801 0 0 1-.105-.192c0-.003-.002-.005-.003-.008-.08-.192-.051-.51.072-.747.102-.2.262-.333.444-.37A1.11 1.11 0 0 1 10.162 3c.4 0 .9.2 1.373.547Zm.813 1.28c.087.348-.182.865-.842.68a.737.737 0 0 0-.167-.043 3.74 3.74 0 0 0-.189.532 4.31 4.31 0 0 0-1.685-1.368 4.98 4.98 0 0 0 .378-.237 1.71 1.71 0 0 1-.226-.333c-.087-.207.015-.747.363-.82.349-.075.894.087 1.431.487s.843.754.937 1.102Z"
        fill="#8C8CA1"
      />
      <Path
        d="M10.43 3.969c.146.059.335.163.567.318.276.185.516.392.669.555-.255.34-.421.806-.523 1.131.05.074.109.148.16.222.05-.185.138-.459.254-.732.03.007.066.007.102.007a.412.412 0 0 0 .269-.08.304.304 0 0 0 .116-.274c0-.14-.109-.318-.334-.533a5.357 5.357 0 0 0-.596-.48c-.624-.422-1.06-.54-1.256-.341-.13.133-.116.296-.073.414a8.456 8.456 0 0 1-.559.34c.087.03.167.067.254.104.232-.126.566-.34.95-.651Zm1.374 1.058c.021.037.029.074.029.096 0 .066-.022.089-.037.103a.257.257 0 0 1-.137.037c.043-.089.094-.163.145-.236ZM10.01 3.924c.021-.022.08-.036.174-.022-.073.06-.145.111-.218.163-.007-.052 0-.103.044-.14Z"
        fill="#8C8CA1"
      />
      <Path
        d="M7.721 4.242c-2.375 0-4.3 1.96-4.3 4.379 0 2.419 1.925 4.379 4.3 4.379 2.376 0 4.3-1.96 4.3-4.379 0-2.418-1.932-4.379-4.3-4.379Zm0 8.514c-2.244 0-4.06-1.85-4.06-4.135 0-2.286 1.816-4.135 4.06-4.135 2.245 0 4.06 1.85 4.06 4.135 0 2.286-1.822 4.135-4.06 4.135Z"
        fill="#8C8CA1"
      />
      <Path
        d="M11.578 8.584c0 2.168-1.729 3.928-3.857 3.928s-3.864-1.76-3.864-3.928h7.721Z"
        fill="#8C8CA1"
      />
      <Path
        d="M11.571 8.621c0-.451-.77-.71-1.794-.799-.74-.059-1.489.015-2.346.282-.74.222-1.41.184-1.896.125-1.082-.125-1.678-.14-1.678.392 0 .77 1.54 1.731 3.85 1.398 1.17-.17 1.772-.517 2.462-.754.748-.252 1.402-.244 1.402-.644ZM8.985 6.757a.66.66 0 0 0 .653-.666.66.66 0 0 0-.653-.665.66.66 0 0 0-.654.665.66.66 0 0 0 .654.666ZM10.053 7.253a.279.279 0 0 0 .276-.281.279.279 0 0 0-.276-.282.279.279 0 0 0-.276.282c0 .155.124.28.276.28Z"
        fill="#E2E2E8"
      />
    </G>
    <Rect x={0.5} y={0.5} width={15} height={15} rx={7.5} stroke="#1E1E2A" />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(3 3)" d="M0 0h10v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgOsmosis;
