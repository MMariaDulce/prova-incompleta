import Form from "../Form/Form";
import PromoBox from "../PromoBox/PromoBox";
import PrincipalInfo from "../PrincipalInfo/PrincipalInfo"


const App = () =>{
    return(
        <section className="containerMain">
            <PrincipalInfo />
        <div>
           <PromoBox texto="Try it free 7 days then 20$/mo. Thereafter"/>
        <Form /> 
        </div>
        </section>
    )
}

export default App;