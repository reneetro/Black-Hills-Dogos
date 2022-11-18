import {useNavigate} from 'react-router-dom';

const NoPage = () => {
    const navigate = useNavigate();

    return <div class="bg-gray-100 h-screen justify-center">
        <center class="mt-24 m-auto">
            <div class=" tracking-widest mt-4">
                <span class="text-gray-500 text-6xl block"><span>4  0  4</span></span>
                <span class="text-gray-500 text-xl">Sorry, We couldn't find what you are looking for!</span>

            </div>
        </center>
        <center class="mt-6">
            <button onClick={() => navigate(-1)} class="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">Go back </button>
        </center>
    </div>;
};

export default NoPage;