import Content from "../components/Content";
import users from "../Demo-Data/DemoData";
import AppLayout from "../components/AppLayout"
import MiniDrawer from "../components/testLayout";

function TotalOrders() {
    
    return (
        <>
            <AppLayout>
                <Content data={users}/>
            </AppLayout>

                

        </>
    )
}


export default TotalOrders