/*
 * Seminario C++
 * Autor: Carlos Salcan <csalcan@est.ups.edu.ec>
 * Fecha: 28-09-2021
 * 
 * Practica #1
 * 
 * Ejercicio #1
 * Domingo de Pascua
 */

#include <iostream>
using namespace std;
int main (){
	
	cout << "\n-- DOMINGO DE PASCUA --" << endl;
	// Se definen las variables a utilizar
	int anio,a,b,c,d,e,n;
	cout << "\nIngrese el anio actual: ";
	cin >> anio;
	// se define los calculos matematicos que se necesitan
	a= anio % 19;
	b= anio % 4;
	c= anio % 7;
	d= (19 * a + 24) % 30;
	e= (2*b + 4*c + 6*d + 5) % 7;
	n= (22 +d + e);
	// Mediante un condicional se verifica si el domingo de pascua sera en marzo o en abril
	if (n <= 31){
		cout << "\nEL domingo de Pascua sera el " << n << " de marzo del " << anio << endl;
	} else if (n > 31){
		cout << "\nEl domingo de Pascua sera el " << n-31 << " de abril del " << anio << endl;
	}
	
return 0;
}
