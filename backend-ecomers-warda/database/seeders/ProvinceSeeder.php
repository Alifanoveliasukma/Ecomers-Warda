<?php



namespace Database\Seeders;



use App\Models\Province;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\Http;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;



class ProvinceSeeder extends Seeder

{

    /**

     * Run the database seeds.

     */

    public function run(): void

    {

        //Fetch Rest API

        $response = Http::withHeaders([

        	//api key rajaongkir

            'key' => config('services.rajaongkir.key'),

        ])->get('https://api.rajaongkir.com/starter/province');

    
        //loop data from Rest API

        foreach($response['rajaongkir']['results'] as $province) {
            //insert ke table "provinces"
            Province::create([
                'province_id' => $province['province_id'],
                'name'        => $province['province']  
                ]);
            }

    }

}