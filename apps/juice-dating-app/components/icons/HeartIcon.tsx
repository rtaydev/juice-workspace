import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const HeartIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 300 300" {...props}>
    <Path
      stroke="#fff"
      strokeWidth={20}
      d="M149.254 71.47c-21.098 4.628-33.141 21.602-37.956 36.991-12.982-12.51-23.581-23.494-50.931-17.495-22.466 4.927-44.794 38.49-15.498 74.039 26.438 32.081 60.074 45.179 93.208 65.554 22.542-32.586 54.29-57.977 63.077-99.831 9.798-46.665-25.527-65.042-51.9-59.257Z"
    />
    <Path
      stroke="#fff"
      strokeWidth={20}
      d="M263.711 146.439c-16.665-4.284-31.347 3.559-40.321 12.87-4.714-13.659-8.285-25.364-29.887-30.917-17.745-4.562-45.722 11.481-37.723 47.558 7.218 32.558 26.4 54.084 42.6 80.653 27.776-15.264 59.5-22.046 80.843-48.921 23.797-29.964 5.319-55.888-15.512-61.243Z"
    />
  </Svg>
)

export default HeartIcon
