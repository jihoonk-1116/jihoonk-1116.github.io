import java.lang.reflect.Array;
import java.util.StringTokenizer;


public class Project1 {

	public static TextFileInput myFile;
	public static StringTokenizer Tokens;
	public static String[] array1,array2,array3;
	public static String line,str;
	
	public static int count1,count2,count3;

	public static void main(String[] args) {
		
		array1= new String[50];
		array2= new String[50];
		array3= new String[50];
		
		count1 = 0;
		count2 = 0;
		count3 = 0;
		

		myFile = new TextFileInput("array.txt");
		line = myFile.readLine();
		while(line != null){
			Tokens =new StringTokenizer(line," ");
			while(Tokens.hasMoreTokens()) {
				array1[count1++] = Tokens.nextToken();
			}
			line =myFile.readLine(); 
		} System.out.println(Tokens);
		
	
	
		
	
	
		
//		wordGUI.createAndShowGUI();
	}

	




private static void selectionSort (short[] array, int length) { 
	for (int i= 0; i < length - 1; i++) {
		int indexLowest = i;
		for ( int j= i + 1; j < length;j++)
			if ( array[j] < array[indexLowest])
				indexLowest = j;
		if (array[indexLowest] != array[i]) {
			short temp = array[indexLowest];
			array[indexLowest] = array[i];
			array[i] = temp;
		}
	}
}
}








