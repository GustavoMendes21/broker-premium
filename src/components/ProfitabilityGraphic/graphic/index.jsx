import { ResponsiveLine } from '@nivo/line'

const lineGraphSetting = {
    "axis": {
        "ticks": {
            "line": {
                "stroke": "#ffffff"
            },
            "text": {
                "font-size": 11,
                "fill": "#707B81"
            }
        },
    }
}


export const MyResponsiveLine = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 30, right: 10, bottom: 80, left: 40}}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="basis"
        theme={lineGraphSetting}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 30,
            tickPadding: 10,
            tickRotation: 0,
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 10,
            tickRotation: 0,
        }}
        colors={{ scheme: 'category10' }}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={0.4}
        isInteractive={false}
        useMesh={true}
        legends={[]}
    />
)