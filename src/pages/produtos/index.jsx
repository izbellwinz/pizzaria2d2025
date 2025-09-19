const Produtoss = () => {
 // Obejto com a lista de pizzas
const pizzas = [
    'Pizza de Muçarela',
    'Pizza de Clabresa',
    'Pizza Baiana',
    'Pizza Portuguesa'
]
// Iteração da lista de pizzas
const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)
    return (
        <div>
<ul>
    {listaPizzas}
</ul>
 
        </div>
    )
}

export default Produtos