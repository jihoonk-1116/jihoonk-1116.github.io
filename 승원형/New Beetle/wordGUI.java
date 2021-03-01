import java.awt.GridLayout;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;







public class wordGUI {
	public static void createAndShowGUI(String[] array, String[] array1, String[] array2) {
		//Create and set up the window.
		JFrame frame = new JFrame("Project 1");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(400,400);
		frame.setLocation(200,200);
		frame.setLayout(new GridLayout(1,3));

		JTextArea textArea = new JTextArea(5, 20);
		textArea.setEditable(false);
		JTextArea textArea1 = new JTextArea(5, 20);
		textArea1.setEditable(false);
		JTextArea textArea2 = new JTextArea(5, 20);
		textArea2.setEditable(false);
		
		textArea.setText("The Valid Words should print here");
		
		JScrollPane scrollPane = new JScrollPane(textArea);
		JScrollPane scrollPane1 = new JScrollPane(textArea);
		JScrollPane scrollPane2 = new JScrollPane(textArea);
		frame.getContentPane().add(scrollPane);
		frame.getContentPane().add(scrollPane1);
		JLabel label = new JLabel("Whole Word Array : ");
		frame.getContentPane().add(label);
		
		textArea.setText("The Valid Words should print here");
		textArea1.setText("The Invalid Words should print here");
		//Display the window.
		
		frame.setVisible(true);

		readAndDisplayMatrix(frame, textArea, label);
	}

	private static void readAndDisplayMatrix(JFrame myFrame, JTextArea myText,
			JLabel myLabel) {
		
		


	}




}

/*private static void readAndDisplayMatrix(JFrame myFrame, JTextArea myText,
        JLabel myLabel) {

int[][] myMatrix = {{1,2,3,4},{4,5,6,7},{7,8,9,10}};
int sum=0;
for(int r=0;r<myMatrix.length;r++) {
for(int c=0;c<myMatrix[r].length;c++) {
myText.append(myMatrix[r][c]+" ");
sum+=myMatrix[r][c];
} myText.append("\n");
}
myLabel.setText("sum is : "+sum);
}
 */