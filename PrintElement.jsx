const PrintApp = () => {
    
    const itemList = ["Aurangabad","Pune","Nagpur","Nagar","Hyderabad","Thane","Sikkim","Shimla","Delhi","Amritsar","Punjab","Kolkata","usmanabad","jalgaon","amravati",]
    
    return<>
    <h2>List of cities :</h2>
    <ul>

        {itemList.map((item)=>{
            return <li>{item}</li>
        })}
    </ul>
    
    </>
}

export default PrintApp;