package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import model.Usuario;
import util.Conecta;

public abstract class UsuarioDAO extends Conecta {

    PreparedStatement stman = null;
    ResultSet result = null;

    public boolean add(Usuario usuario) {
        String sql = "insert into usuario values "
                + "(null,?,?,?,?)";
        try {
            getConnection();
            stman = connection.prepareStatement(sql);
            stman.setString(1, usuario.getNome());
            stman.setString(2, usuario.getEmail());
            stman.setString(3, usuario.getPws());
            stman.setLong(4, usuario.getTipo().getId());
            stman.execute();
            stman.close();
            return true;
        } catch (SQLException erro) {
            System.err.println("Erro ao cadastrar:" + erro.toString());
        } finally {
            close();
        }
        return false;
    }
    
    public Usuario get(long id) {
        String sql = "select * from usuario where id = ?;";
        Usuario usuario = null;
        try {
            getConnection();
            stman = connection.prepareStatement(sql);
            stman.setLong(1, id);
            result = stman.executeQuery();
            result.first();
            usuario = new Usuario();
            usuario.setUid(result.getLong("uid"));
            usuario.setNome(result.getString("nome"));
            usuario.setEmail(result.getString("email"));
            usuario.getTipo().setId(result.getLong("idTipo"));
            usuario.setAtivo(result.getBoolean("ativo"));
            result.close();
            stman.close();
        } catch (SQLException e) {
            System.err.println("Erro ao buscar: " + e.toString());
        } finally {
            close();
        }
        return usuario;
    }

//    public long getCPF(String cpf) {
//        String sql = "select * from usuario where cpf = ?;";
//        long id = 0;
//        try {
//            getConnection();
//            stman = connection.prepareStatement(sql);
//            stman.setString(1, cpf);
//            result = stman.executeQuery();
//            result.first();
//            id = result.getLong("idPessoa");
//            result.close();
//            stman.close();
//        } catch (SQLException e) {
//            System.err.println("Erro ao buscar o CPF: " + e.toString());
//        } finally {
//            close();
//        }
//        return id;
//    };

}
