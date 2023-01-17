
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MList({ id, brand, model, price, config, image, inStock }) {
    return (
        <div>
            <table className="border-2 border-teal-500 w-full h-full">
                <tr>
                    <td className={design}>{id}</td>
                    <td className={design}>{brand}</td>
                    <td className={design}>{model}</td>
                    <td className={design}>{price}</td>
                    <td className={design}>{inStock}</td>
                    <td className="border-2 border-blue-500 w-2/12 h-2/6 py-4 font-bold text-red-500 text-2xl text-center hover:text-blue-800 ">
                        <Link to={"/" + id}>Details</Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}

const design = 'border-2 border-blue-500 w-2/12 h-2/6 py-4 font-bold text-2xl font-serif pl-5';
const design2 = 'border-2 border-blue-500 w-2/12 h-2/6 py-4 font-bold text-3xl font-bold font-serif';

function MobileList() {
    const [stock, setStock] = useState("");
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:3001')
            .then((response) => response.json())
            .then((data) => {
                const a = //data.filter((x) => x.id === id)
                    data.map(d =>
                        <MList
                            id={d.id}
                            brand={d.brandName}
                            model={d.modelName}
                            price={d.price}
                            inStock={d.inStock}
                        />
                    )
                setStock(a);
            });
    }, []);
    return (
        <div className="flex w-full h-full">
            <div className="w-2/12 h-full"></div>
            <div className="w-8/12 h-full">
                <h1 className="text-6xl font-bold font-serif text-center text-green-800 mt-[5%]">List of Mobile Phone in Stock</h1>
                <table className="border-2 border-teal-500 mt-[4%] w-full h-full font-bold">
                    <tr>
                        <th className={design2}>SRL</th>
                        <th className={design2}>Brand Name</th>
                        <th className={design2}>Model</th>
                        <th className={design2}>Price</th>
                        <th className={design2}>In Stock</th>
                        <th className={design2}>Details</th>
                    </tr>
                </table>
                {stock}
                <div className="py-[17%]"></div>
            </div>
            <div className="w-2/12 h-full"></div>
        </div>
    );
}
export default MobileList;
