const NutritionDetails = ({ label, quantity, unit}) => {
    return(
        <div>
            <p><b>{label}</b> - {quantity} {unit}</p>
        </div>
    )
}

export default NutritionDetails;