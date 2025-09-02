import LineBox from "./mui-styles/LineBox";
import StylePaper from "./mui-styles/StylePaper";
import WithOutBroderButton from "./mui-styles/withOutBroderButton";

export default function OrderDitales({CallBack}) {

    const orderStatuses = [
        { id: 1, key: "PROCESSING", name: "Processing", count: 2 },
        { id: 2, key: "PENDING", name: "Pending", count: 3 },
        { id: 3, key: "COMPLETE", name: "Complete", count: 22 },
        { id: 4, key: "DELIVERED", name: "Delivered", count: 30 },
        { id: 5, key: "CANCEL", name: "Cancel", count: 5 }
    ]; 

    const elevation = 5

    return (
        <LineBox>
            {
                orderStatuses.map((orderStatuse) => (
                    <StylePaper key={orderStatuse.id} elevation={elevation} >
                        <WithOutBroderButton onClick={()=>CallBack(orderStatuse.key)}>
                            {orderStatuse.name}
                            <br /> {orderStatuse.count}
                        </WithOutBroderButton>
                    </StylePaper>
                ))
            }
        </LineBox>
    )
}