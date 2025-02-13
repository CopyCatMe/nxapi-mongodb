import { connectToDatabase } from "@/lib/mongodb";

export async function GET(request) {
    const { database } = await connectToDatabase();
    const collection = database.collection("products");

    const results = await collection.find({}).toArray();

    return Response.json(results, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });
}

export async function POST(request) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' }, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })

    const { database } = await connectToDatabase();
    const collection = database.collection("products")

    const { nombre, precio } = await request.json() 
    const results = await collection.insertOne({ nombre, precio });

    return Response.json(results, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
}

