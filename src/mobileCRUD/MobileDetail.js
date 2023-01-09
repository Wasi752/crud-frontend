import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MobileCreate from "./MobileCreate";

function Details({ id, brand, model, config, price, image, inStock }) {
    const c = "text-2xl text-left mt-3";
    return (
        <div className="w-full h-full">
            <div className="w-full h-full"></div>
            <div className="flex flex-row w-full h-full">
                <div className="flex flex-col w-full h-full">
                    <p className={c}>ID : {id}</p>
                    <p className={c}>Brand Name : {brand}</p>
                    <p className={c}>Model Number : {model}</p>
                    <p className={c}>Configaration : {config}</p>
                    <p className={c}>Price : {price}</p>
                    <p className={c}>In Stock : {inStock}</p>
                </div>
                <div className="flex flex-col w-full h-full">
                    <p className='text-2xl font-bold ml-56'>Phone Image<img src={"/" + image} className=" w-4/12 h-2/6 mt-7" /></p>
                </div>
            </div>
            <div className="w-full h-full"></div>
        </div>
    );
}

function MobileDetail() {
    const { id } = useParams();
    const idNo = parseInt(id);
    const [mobile, setMobile] = useState("");
    const [pageNo, setPageNo] = useState(1);
    const [image, setImage] = useState();

    useEffect(() => {
        fetch('http://localhost:3001')
            .then((response) => response.json())
            .then((data) => {
                const a = data.filter((d) => d.id === idNo)[0];
                setMobile(
                    <Details
                        id={a.id}
                        brand={a.brandName}
                        model={a.modelName}
                        config={a.config}
                        price={a.price}
                        inStock={a.inStock}
                        image={a.image}
                    />
                )
                const b = data.filter((d) => d.id === idNo)
                    .map(x => x.image);
                setImage(b);
            });
    }, [pageNo, idNo]);

    return (
        <div className="flex w-screen h-screen bg-gray-100">
            <div className="w-2/12 h-full"></div>
            <div className="w-8/12 h-full">
                <div className='bg-white flex flex-col justify-center px-[5%] py-[5%] mt-[12%]'>
                    <p className="text-4xl text-red-800 font-bold">Phone Details</p>
                    <p className="mt-[5%]">{mobile}</p>
                    <div className="flex flex-row">
                        <div className="w-2/12">
                            <Link to={"/" + (idNo + "/edit")}>
                                <button
                                    type="button"
                                    onClick={''}
                                    className='mt-11 w-8/12 py-4 bg-blue-800 shadow-lg shadow-teal-900/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg text-2xl font-serif hover:bg-teal-400'
                                >Update Info
                                </button>
                            </Link>
                        </div>
                        <div className="w-8/12"></div>
                        <div className="w-2/12">
                            <Link to={"/" + (idNo + 1)}>
                                <button
                                    type="button"
                                    onClick={() => setPageNo(pageNo + 1)}
                                    className='mt-11 ml-16 w-8/12 py-4 bg-blue-800 shadow-lg shadow-teal-900/50 hover:shadow-teal-500/40 text-white font-semibold font-serif rounded-lg text-2xl  hover:bg-teal-400'
                                >Next
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/12 h-full"></div>
        </div>
    );
}
export default MobileDetail;
