import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function HomePage() {
  return (
    <ResponsiveGridLayout
      className="layout"
      rowHeight={30}
      width={1200}
      autoSize={true}
      allowOverlap={false}
    >
      <div
        className="bg-lime-700 text-white p-10"
        key="a"
        data-grid={{ x: 0, y: 0, w: 4, h: 15, minW: 1, maxW: 4, maxH: 20 }}
      >
        a
      </div>
      <div
        className="bg-sky-700 text-white p-10"
        key="b"
        data-grid={{ x: 5, y: 0, w: 8, h: 15, minW: 3, maxW: 8, maxH: 20 }}
      >
        b
      </div>
      <div
        className="bg-green-500 text-white p-10"
        key="c"
        data-grid={{ x: 0, y: 11, w: 12, h: 15, minW: 1, maxW: 12, maxH: 25 }}
      >
        c
      </div>
    </ResponsiveGridLayout>
  );
}
