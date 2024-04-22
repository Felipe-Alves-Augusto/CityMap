<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PontosInteresse;

class PontosInteresseController extends Controller
{
    public function index(Request $request) {
        $points = PontosInteresse::all();
        
        return response()->json($points, 200);
    }

    public function store(Request $request) {
        
        $request->validate([
            "point" => "required",
            "address" => "required",
            "lat" => "required",
            "lng" => "required",
            "category" => "required"
        ]);
        

        $point = new PontosInteresse();

        // identificando os input vindo do front-end
        $point->point = $request->input('point');
        $point->address = $request->input('address');
        $point->lat = $request->input('lat');
        $point->lng = $request->input('lng');
        $point->category = $request->input('category');
        
        //sanvando no banco de dados
        $point->save();

        return redirect()->route('pontosInteresse.index')->with("success", 'ponto de interesse registrado');
    }

    // public function update(Resquest $request, $id){
    //     $point = PontosInteresse::findOrFail($id);
    //     $point->update($request->all());
    //     return redirect()->route('points.index');

    // }

    // public function destroy($id){
    //     $point = PontosInteresse::findOrFail($id);
    //     $point->delete();
    //     return redirect()->route('points.index');
    // }
}
